const defaultKey = "bentoak.";

export const getFromStorage = (key: string) => {
  const storage: string = window.localStorage.getItem(defaultKey + key) || "";
  return storage ? JSON.parse(storage) : null;
};

export const addToStorage = ({ key, value }: { key: string; value: any }) => {
  window.localStorage.setItem(defaultKey + key, JSON.stringify(value));
};

export const updateStorage = ({ key, value }: { key: string; value: any }) => {
  const storage = getFromStorage(key);
  storage.push(value);
  addToStorage({ key, value });
};

export const deleteFromStorage = (key: string) => {
  window.localStorage.removeItem(defaultKey + key);
};
