import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FoodItems from "./CatalogComponents/FoodItems";
import PrintIcon from "@mui/icons-material/Print";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import CustomIcon from "../Components/UI/Icon";
function Catalog() {
  const [activeButton, setActiveButton] = useState(0);

  const buttonData = [
    { text: "All", variant: "contained", isActive: true },
    {
      text: "Favorite",
      variant: "outlined",
      icon: <StarBorderIcon />,
      isActive: false,
    },
    { text: "Burger", variant: "outlined", isActive: false },
    { text: "Sandwich", variant: "outlined", isActive: false },
    { text: "Juice", variant: "outlined", isActive: false },
  ];

  // Function to handle active button state
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <Box sx={{ padding: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            ml: "20px",
            fontSize: "24px",
            letterSpacing: "0.5px",
            alignItems: "center",
          }}
        >
          Catalog
        </Typography>
        <Box sx={{ alignItems: "center" }}>
          <CustomIcon
            icon={MoreVertIcon}
            bgcolor="blue"
            textcolor="white"
            sx={{
              margin: 1,
              border: "none",
              backgroundColor: "transparent",
              color: "black",
              fontSize: "32px",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "30px",
              },
            }}
          />
          <CustomIcon
            icon={CloseIcon}
            bgcolor="blue"
            textcolor="white"
            sx={{
              margin: 1,
              border: "none",
              backgroundColor: "transparent",
              color: "black",
              fontSize: "32px",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "40px",
              },
            }}
          />
        </Box>
      </Box>

      {/* Button Group Container with Horizontal Scroll */}
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          marginTop: "20px",
          ml: "20px",
          //   overflowX: "auto",                          // Allow horizontal scrolling
          //   whiteSpace: "nowrap",                       // Prevent line breaks between buttons
          //   scrollBehavior: "smooth",
          //   paddingBottom: "20px",                       // Smooth scrolling when the scrollbar is dragged
          //   "&::-webkit-scrollbar": {
          //     height: "14px",                            // Reduced scrollbar height (thinner)
          //     width: "100px",                            // Set the scrollbar width to 40px
          //     backgroundColor: "white",                  // Background for scrollbar
          //   },
          //   "&::-webkit-scrollbar-thumb": {
          //                                                 // Style scrollbar thumb
          //     backgroundColor: "gray",                    // Scrollbar thumb color
          //     borderRadius: "10px",
          //     width: "10px",
          // },
        }}
      >
        {/* <Button variant="contained" sx={{mr:"20px"}}>All</Button> */}
        {buttonData.map((button, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            {/* Button */}
            <Button
              onClick={() => handleButtonClick(index)}
              startIcon={button.icon}
              variant={button.variant}
              sx={{
                backgroundColor: activeButton === index ? "#1976d2" : "white",
                color: activeButton === index ? "white" : "black",

                border: "1px solid #e0e0e0",
                marginRight: "10px",
                height: "55px",
                minWidth: button.text === "All" ? "80px" : "110px",
                textTransform: "none",
                fontSize: "18px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor:
                    activeButton === index ? "#1565c0" : "#f5f5f5",
                },
              }}
            >
              {button.text}
            </Button>
          </Box>
        ))}
      </Box>


      <FoodItems />  {/* Display food items... */}


      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
      >
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          sx={{
            width: "30%",
            border: "1px solid #227bf0",
            backgroundColor: "white",
            textAlign: "center",
            color: "#227bf0",
            padding: "14px",
            fontSize: "15px",
            ml: "20px",
            borderRadius: "10px",
            textTransform: "none",
          }}
          disableRipple
          disableFocusRipple
          disableElevation
        >
          Print bill
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "58%", mr: "20px", borderRadius: "10px" }}
        >
          Proceed to payment
        </Button>
      </Box>
    </Box>
  );
}

export default Catalog;
