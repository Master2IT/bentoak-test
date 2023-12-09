export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts = await Promise.all(
    data.map(async (post: any) => {
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        count: (await getPostsByPostId(post.id))?.total,
      };
    })
  );

  return {
    line: posts,
    radar: posts.filter((post: any, i: number) => i < 5),
    pie: posts.filter((post: any, i: number) => i < 10),
    bar: posts.filter((post: any, i: number) => i < 15),
  };
};
const getPostsByPostId = async (id: number) => {
  if (!id) return;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const data = await res.json();

  return {
    total: Math.floor(Math.random() * data.length) + 1,
    data,
  };
};
