import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Box, Button } from '@mui/material';
import TablEBodyContent from './TableBody'
import EmptyScreen from '../EmptyScreen';
import { useLocation } from 'react-router-dom';


const CartTable = () => {
  const location = useLocation();
  const data = [
    { item: 'Chicken BBQ pizza with mexican flavoured toppings', details: '3 Large pan pizzas, fries, burger', qty: 1, amount: 100 },
    { item: 'Mushroom salad', details: '3 Large pan pizzas, fries, burger', qty: 3, amount: 300 },
    { item: 'Grape juice', details: '', qty: 2, amount: 200 },
    { item: 'Mushroom sandwich combo', details: 'Large', qty: 1, amount: 100 },
    { item: 'Cappuccino', details: '', qty: 2, amount: 200 }
  ];

  return (
    <Box>
    {/* <TableContainer component={Paper}> */}
      <Table>
        <TableHead sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}>
          <TableRow sx={{border:"1px solid #dedede"}}>
            <TableCell sx={{color:"#919090", fontSize:"16px"}}>Item</TableCell>
            <TableCell align="center" sx={{color:"#919090", fontSize:"16px"}}>Qty</TableCell>
            <TableCell align="center" sx={{color:"#919090", fontSize:"16px"}}>Amount (SAR)</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        {location.pathname === '/add-to-cart' && (
       <TablEBodyContent /> 
        )}

      </Table>
    {/* </TableContainer> */}
    {location.pathname !== '/add-to-cart' && (

    <EmptyScreen />
    ) }
    </Box>
  );
};

export default CartTable;
