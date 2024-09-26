import Typography from "@mui/material/Typography";
import { TableBody, TableCell, TableRow, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

function Tablebody() {
  const data = [
    {
      item: "Chicken BBQ pizza with mexican flavoured toppings",
      details: "3 Large pan pizzas, fries, burger",
      qty: 1,
      amount: 100,
    },
    {
      item: "Mushroom salad",
      details: "3 Large pan pizzas, fries, burger",
      qty: 3,
      amount: 300,
    },
    { item: "Grape juice", details: "", qty: 2, amount: 200 },
    { item: "Mushroom sandwich combo", details: "Large", qty: 1, amount: 100 },
    { item: "Cappuccino", details: "", qty: 2, amount: 200 },
  ];
  return (
    <TableBody sx={{ color: "#919090" }}>
      {data.map((row, index) => (
        <TableRow key={index}>
          <TableCell>
            <Typography
              variant="body1"
              component="h1"
              sx={{ color: "black", fontSize: "20px", height: "60px" }}
            >
              {row.item}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row.details}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: " 1px solid #dbdbdb",
                borderRadius: "8px",
                height: "50px",
              }}
            >
              <IconButton size="small">
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1" sx={{ mx: 4 }}>
                {row.qty}
              </Typography>
              <IconButton size="small">
                <AddIcon />
              </IconButton>
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant="body1"
              sx={{ color: "black", fontSize: "20px" }}
            >
              {row.amount.toFixed(2)}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <IconButton color="#dbdbdb">
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default Tablebody;
