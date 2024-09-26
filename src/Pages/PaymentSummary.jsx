import React from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import Payment from "./PaymentDetails/Payment";
import Catalog from "./Catalog";

const PaymentSummary = () => {
  return (
    <Box sx={{ padding: "20px", borderRadius: "8px", margin: "0 auto" }}>
      <Payment />
      {/* <Catalog /> */}
    </Box>
  );
};

export default PaymentSummary;
