import { DataGrid, GridColDef } from "@mui/x-data-grid";
const columns: GridColDef[] = [
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <img
        src={params.row.thumbnail}
        alt={params.row.title}
        width={64}
        height={64}
      />
    ),
  },
  { field: "title", headerName: "Title", width: 200 },
  {
    field: "description",
    headerName: "Description",
    width: 350,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "discountPercentage",
    headerName: "Discount %",
    width: 100,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 50,
    filterable: false,
    disableColumnMenu: true,
  },
  { field: "brand", headerName: "Brand", width: 150 },
  { field: "category", headerName: "Category", width: 200 },
];

function Product({ products }: { products: any[] }) {
  return (
    <DataGrid
      rows={products}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10, 20, 30]}
    />
  );
}

export default Product;
