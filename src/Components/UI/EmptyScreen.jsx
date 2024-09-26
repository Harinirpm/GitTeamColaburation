import { Box, Typography } from "@mui/material";
import empty1 from "../UI/empty1.jpg";
import React from "react";

function EmptyScreen() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
            <img
          src={empty1}
          alt="Logo"
          style={{ width: "100px", height: "90px", marginTop: "150px" }}
        />
        <Typography variant="h6" component="p" style={{marginBottom:"10px"}}>
          Cart is empty
        </Typography>
        <Typography variant="h6" component="p" style={{ color: "gray", fontWeight:"400"}}>
          Scan barcode or add items from catalaog{" "}
        </Typography>
      </Box>
    </Box>
  );
}

export default EmptyScreen;
