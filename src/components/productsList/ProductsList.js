import React from "react";
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ProductTable from "./ProductTable";
//import { useNavigate } from "react-router";
//import ProductTable from "./ProductTable";
//import EditDialog from "./EditDialog";
//import DeleteDialog from "./DeleteDialog";

const Header = styled("div")(({ theme }) => ({
  margin: `${theme.spacing(6)} 0`,
  display: "flex",
  justifyContent: "space-between",
}));

const Title = styled(Typography)(() => ({
  color: "white",
  textAlign: "center",
}));

const ProductsList = () => {
  
  // const history = useNavigate();

  return (
    <>
    {/*}
    <EditDialog/>
    <DeleteDialog/>
    {*/}
      <Title as="h1">Products</Title>
      <Header>

      </Header>
      <ProductTable />
    </>
  );
};

export default ProductsList;
