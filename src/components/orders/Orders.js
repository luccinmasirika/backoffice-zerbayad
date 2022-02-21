import React,{useEffect,useState} from 'react';
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
  Stack
  } from '@mui/material';

import {listOrders} from '../../redux/actions/orderActions'

function Orders(props) {

    const ordersItem = []
    const dispatch = useDispatch();

    const orders = useSelector(state=>state?.orders?.orders)
    const ordersCount = useSelector((store) => store?.orders?.orders?.count);

    const [indexPage,setIndexPage] = useState(0)
    const limit = 10;

    useEffect(() => {
        setTimeout(() => {
        dispatch(listOrders(indexPage,limit))      
        }, 4000);
    
    }, [indexPage]);
  if(!orders) return <><h1>Loading...</h1><CircularProgress /></>  
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
                            <button onClick={()=>{props.setProductSelected(item._id);props.setShowCompo(4)}}>
                            <Typography >{item._id}</Typography>
                            </button>
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
              </ListItem>

              <ListItem>
              </ListItem>

            </List>
          </Grid>
          </Grid>

  </div>;
}

export default Orders;
