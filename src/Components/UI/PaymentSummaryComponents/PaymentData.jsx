import React from 'react';
import { Box, Typography, Divider } from "@mui/material";

function PaymentData({ items = [], grandTotal }) {
  return (
    <Box>
      <Box sx={{ marginBottom: "10px" }}>
        {/* Conditional Rendering for Items */}
        {items.length > 0 ? (
          items.map((item, index) => (  //condition true
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                ml: "20px"
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#696969",
                  fontWeight: "400",
                  fontSize: "17px",
                  letterSpacing: "0.9px",
                  mt: "8px",
                }}
              >
                {item.label} 
              </Typography>
              <Typography
                variant="h6"
                fontWeight="500"
                sx={{
                  fontSize: "17px",
                  letterSpacing: "0.9px",
                  marginRight: "20px",
                  mt: "8px",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))
        ) : (                                //condition false
          <Typography
            variant="h6"
            sx={{
              color: "#696969",
              textAlign: "center",
              margin: "20px 0"
            }}
          >
            No items to display.
          </Typography>
        )}

        {items.length > 0 && (
          <Divider sx={{ my: 1, width: "94%", marginLeft: "22px" }} />
        )}

        {/* Conditional Rendering for Grand Total */}
        {grandTotal !== undefined && grandTotal >= 0 ? (
          //condition true
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              mt: "26px",
              ml: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#696969",
                fontWeight: "400",
                fontSize: "17px",
                letterSpacing: "0.9px",
              }}
            >
              Grand total
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginRight: "20px", fontWeight: "500" }}
            >
              SAR {grandTotal}
            </Typography>
          </Box>
        ) : (                               //grandtotal condition false
          <Typography
            variant="h6"
            sx={{
              color: "#696969",
              textAlign: "center",
              margin: "20px 0"
            }}
          >
            No grand total available.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default PaymentData;