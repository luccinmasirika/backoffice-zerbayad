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
} from '@material-ui/core';
import Alert from '@mui/material/Alert';

import Pagination from "react-js-pagination";


import {listOrders} from '../../redux/actions/orderActions'

function Orders(props) {

    const ordersItem = []
    const dispatch = useDispatch();

    const orders = useSelector(state=>state?.orders?.orders)
    const [activePage,setActivePage] = useState(1);

   const  handlePageChange = (pageNumber) =>{
      console.log(`active page is ${pageNumber}`);
      setActivePage(pageNumber)
    }

    useEffect(() => {
        setTimeout(() => {
        dispatch(listOrders())      
        }, 4000);
    
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
              <Pagination
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
              </ListItem>

            </List>
          </Grid>
          </Grid>

  </div>;
}

export default Orders;
