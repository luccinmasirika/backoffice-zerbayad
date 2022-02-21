import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { useQuery } from "react-query";
//import getPosts from "api/getPosts";
import { grey, red } from "@mui/material/colors";
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import {
  getProducts,
  getProduct
} from "../../redux/actions/productActions";

import Pagination from '@mui/material/Pagination';


//import deletePost from "api/deletePost";
import { useEffect, useState } from "react";

const theme = createTheme();

const CustomTable = styled(Paper)(({ theme }) => ({
  background: theme.palette.grey.dark,
  borderRadius: 6,
  minHeight: 410,
  boxShadow: "none",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: grey[800],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTableHead = styled(TableHead)(({ theme }) => ({
  "& .MuiTableCell-root": {
    borderBottom: "1px solid #000",
    color: theme.palette.grey.secondary,
    padding: theme.spacing(2),
    fontSize: 12,
  },
}));

const CustomTableBody = styled(TableBody)({
  "& th.MuiTableCell-root, td.MuiTableCell-root": {
    borderBottom: 0,
    color: "#fff",
  },
});

const CustomEditIcon = styled(EditIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  background: grey[700],
  borderRadius: theme.spacing(2),
}));

const ProductTable = () => {
  const products = useSelector((store) => store?.products?.products?.data);
  const productsCount = useSelector((store) => store?.products?.products?.count);

  const [indexPage, setIndexPage] = useState(0)
  const limit = 10;
  //const isLoading = useSelector((state) => state.media.isLoading);
  const dispatch = useDispatch();


  console.log('products', products)

  const clickEdit = (post) => {
    //  dispatch(toggleEditDialog());
    //  dispatch(setSelectedPost(post));
  };

  const clickDelete = async (post) => {
    //  dispatch(toggleDeleteDialog());
    //  dispatch(setSelectedPost(post));
    // await deletePost(id);
    // dispatch(fetchPosts());

  };


  useEffect(() => {
    dispatch(getProducts(indexPage, limit))
  }, [indexPage])

  
  // useEffect(() => {
  //   dispatch(getProduct('620b3c2f9cf20891c8b4230b'))
  // }, [])

  const posts = [{ _id: '1', title: 'test', description: 'desc' }]



  if (!products) return <><h1>Loading...</h1><CircularProgress /></>
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={CustomTable}>
        <Table aria-label="media" size="small">
          <CustomTableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </CustomTableHead>
          <CustomTableBody>
            {products && products.map((post) => {
              const { name, _id, description } = post;

              return (
                <StyledTableRow key={_id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <CustomIconButton
                        aria-label="Edit"
                        onClick={() => clickEdit(post)}
                        color="inherit"
                      >
                        <CustomEditIcon fontSize="small" />
                      </CustomIconButton>
                      <CustomIconButton
                        aria-label="Delete url"
                        onClick={() => clickDelete(post)}
                      >
                        <DeleteOutlineIcon
                          sx={{ color: red[300] }}
                          fontSize="small"
                        />
                      </CustomIconButton>
                    </Stack>
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </CustomTableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} sx={{ marginLeft: '32%' }}>
        {productsCount && <Pagination count={Math.round(productsCount / 10)} showFirstButton showLastButton
          onChange={(e, page) => setIndexPage((page * 10) - 10)} />}
      </Stack>
    </ThemeProvider>
  );
};

export default ProductTable;
