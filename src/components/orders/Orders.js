import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material';
import Alert from '@mui/material/Alert';

import {listOrders} from '../../redux/actions/orderActions'

function Orders() {

    const ordersItem = []
    const dispatch = useDispatch();

    const orders = useSelector(state=>state?.orders?.orders)
    console.log('orders',orders)
    useEffect(() => {
    dispatch(listOrders())
    }, []);

  return <div>

<Typography component="h2" variant="h2" align='center'>
        Orders
</Typography>

<Grid container spacing={1}>
      <Grid item md={9} xs={12}>
            <List>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order Number</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell align="right">Buyer Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orders && orders.data.map((item) => (
                        <TableRow key={item._id}>
                          <TableCell>
                            <a href={`/product/${item._id}`} >
                            <Typography>{item._id}</Typography>
                            </a>
                          </TableCell>

                          <TableCell>
                            <a href={`/productPage/${item._id}`} >

                                <Typography>{item.client_name}</Typography>

                            </a>
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
              </ListItem>
            </List>
          </Grid>
          </Grid>

  </div>;
}

export default Orders;
