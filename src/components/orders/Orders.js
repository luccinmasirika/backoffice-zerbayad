import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Stack,
} from "@mui/material";

import { useNavigate, Link } from "react-router-dom";

import { listOrders } from "../../redux/actions/orderActions";

function Orders(props) {
  const ordersItem = [];
  const dispatch = useDispatch();
  const navigate = useNavigate()
  

  const orders = useSelector((state) => state?.orders?.orders);
  const ordersCount = useSelector((store) => store?.orders?.orders?.count);

  const [indexPage, setIndexPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    setTimeout(() => {
      dispatch(listOrders(indexPage, limit));
    }, 4000);
  }, [indexPage]);
  if (!orders)
    return (
      <>
        <h1>Loading...</h1>
        <CircularProgress />
      </>
    );
  return (
    <TableContainer>
      <Table sx={{ width: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>Client Name</TableCell>
            <TableCell align="right">Buyer Name</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders &&
            orders.data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <Link to={`/orders/${item._id}`}>{item._id}</Link>
                </TableCell>

                <TableCell>
                  <Typography>{item.client_name}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{item.name}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{item.status}</Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Orders;
