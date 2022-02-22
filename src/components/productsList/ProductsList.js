import React from "react";
import {
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import { Link } from "react-router-dom";

function ProductsList(props) {
  return (
    <TableContainer>
      <Table sx={{ width: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Link to={`/products/${'fakeid'}`}>Edit</Link>
            </TableCell>
            <TableCell>
              <Typography>Fake Product</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Fake Category</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Fake Price</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsList;
