import Box from "@mui/material/Box";
import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DiscountIcon from "@mui/icons-material/Discount";
import PrintIcon from "@mui/icons-material/Print";
import { Typography, Button, IconButton, Divider } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CustomButton from "../Components/UI/Button";
import PaymentData from "../Components/UI/PaymentSummaryComponents/PaymentData";

function AddToCart() {
  const paymentDetails = [
    { label: "SubTotal", value: "SAR 400.00" },
    { label: "Tax amount", value: "SAR 50.00" },
    { label: "Total tax", value: "SAR 50.00" },
  ];

  const grandTotal = paymentDetails.reduce((total, item) => {
    const valueAsNumber = parseFloat(item.value.replace(/SAR|,/g, "").trim());
    return (total += valueAsNumber);
  }, 0);

  console.log(grandTotal);

  const buttonData = [
    { text: "Customer", icon: PersonIcon, variant: "outlined" },
    { text: "  Coupon", icon: LocalOfferIcon, variant: "outlined" },
    { text: "Discount", icon: DiscountIcon, variant: "outlined" },
  ];
  // const total = `SAR ${grandTotal.toFixed(2)}`;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          ml: "20px",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mt: "20px", fontSize: "20px", letterSpacing: "1px" }}
        >
          Payment summary
        </Typography>
        <Typography
          variant="p"
          color="text.secondary"
          sx={{ mr: "20px", display: "flex", flexDirection: "space-around" }}
        >
          <CalendarMonthOutlinedIcon />
          Ashwin
        </Typography>
      </Box>

      {/* calling payment data  . it is present in Components -> UI -> PaymentSummaryComponents -> PaymentData*/}
      {/* < Payment /> */}
      <PaymentData items={paymentDetails} grandTotal={grandTotal.toFixed(2)} />

      {/*bottom buttons of payment summary*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
          marginBottom: "20px",
        }}
      >
        <Divider sx={{ my: 1, width: "100%" }} />

        <Button
          variant="outlined"
          startIcon={<EditNoteIcon />}
          sx={{
            border: "none",
            textAlign: "center",
            width: "690px",
            color: "#0a3e66",
            padding: "15px",
            fontSize: "15px",
            textTransform: "none",
            height: "40px",
            backgroundColor: "transparent",
          }}
          disableRipple
          disableFocusRipple
          disableElevation
        >
          Add Note
        </Button>
        <Divider sx={{ my: 1, width: "100%" }} />
      </Box>

      {/* Action Buttons */}
      {/*adding payment buttons*/}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {buttonData.map((btn, index) => (
          <CustomButton
            key={index}
            variant={btn.variant}
            startIcon={<btn.icon />}
            text={btn.text}
            sx={{
              width: "86%",
              border: "1px solid #0a3e66",
              textAlign: "center",
              color: "#0a3e66",
              padding: "15px",
              fontSize: "15px",
              backgroundColor: "white",
              ml: "20px",
              borderRadius: "10px",
              textTransform: "none",
            }}
          ></CustomButton>
        ))}
      </Box>
      <Divider sx={{ my: 1, width: "100%", mb: "30px" }} />

      {/* Print and Proceed buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          sx={{
            width: "26%",
            border: "1px solid #227bf0",
            backgroundColor: "white",
            textAlign: "center",
            color: "#227bf0",
            padding: "15px",
            fontSize: "15px",
            ml: "20px",
            borderRadius: "10px",
          }}
        >
          Print bill
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "60%", mr: "20px", borderRadius: "10px" }}
        >
          Proceed to payment
        </Button>
      </Box>
    </Box>
  );
}

export default AddToCart;
