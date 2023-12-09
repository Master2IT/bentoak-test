import { Grid } from "@mui/material";
import DashboardLayout from "../../layouts/dashboard";
import Product from "../../components/Product";
import { useQuery } from "react-query";
import { getProducts } from "../../api/products";

function Products() {
  const { data } = useQuery("products", getProducts);
  return (
    <DashboardLayout>
      <Grid m={3} xs={12} md={8} lg={9}>
        {data && data.length && <Product products={data} />}
      </Grid>
    </DashboardLayout>
  );
}

export default Products;
