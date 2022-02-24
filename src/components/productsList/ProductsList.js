import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "redux/actions/productActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import Tooltip from "@mui/material/Tooltip";

import LinearProgress from "@mui/material/LinearProgress";

function ProductsList() {
  const products = useSelector((store) => store?.products?.products?.data);
  const productsCount = useSelector(
    (store) => store?.products?.products?.count
  );

  const navigate = useNavigate();

  const [indexPage, setIndexPage] = useState(0);
  const limit = 10;
  //const isLoading = useSelector((state) => state.media.isLoading);
  const dispatch = useDispatch();

  console.log("products", products);

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

  const handleEditproduct = (path) => {
    navigate(path);
  };

  useEffect(() => {
    dispatch(getProducts(indexPage, limit));
  }, [indexPage]);

  return (
    <TableContainer>
      <Table sx={{ width: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="center">Other Images</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((el, i) => (
            <TableRow key={el._id}>
              <TableCell>
                <Stack
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1,
                    overflow: "hidden",
                    bgcolor: "grey.lightDark",
                  }}
                >
                  <img
                    src={el?.productSlider[0]}
                    alt={el?.name}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </Stack>
              </TableCell>
              <TableCell>
                <Typography>{el?.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{el?.category}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{el?.price}</Typography>
              </TableCell>
              <TableCell align="center">
                <AvatarGroup
                  max={3}
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  {el?.productSlider?.map((path, i) => (
                    <Avatar alt="Others images" src={path} key={i} />
                  ))}
                </AvatarGroup>
              </TableCell>
              <TableCell align="center">
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Tooltip title="Edit product" arrow>
                    <IconButton
                      sx={{ bgcolor: "grey.darkLight", borderRadius: 2 }}
                      aria-label="Edit Product"
                      color="primary"
                      onClick={() => handleEditproduct(el?._id)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete product" arrow>
                    <IconButton
                      sx={{ bgcolor: "grey.darkLight", borderRadius: 2 }}
                      aria-label="Delete Product"
                      color="error"
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!products && <LinearProgress />}
    </TableContainer>
  );
}

export default ProductsList;
