import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomIcon from "../Components/UI/Icon";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import Searchbar from "../Components/UI/Searchbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation } from "react-router-dom";

import Table from "../Components/UI/CartSummaryComponents/Table";
// import { Navigate } from "react-router-dom";

function CartSummary() {
  // const [isMenuActive, setIsMenuActive] = useState(false);

  const iconData = [
    {
      icon: AccountCircleIcon,
      route: "/home",
      bgcolor: "blue",
      textcolor: "white",
    },
    {
      icon: TableRestaurantIcon,
      route: "/settings",
      bgcolor: "green",
      textcolor: "white",
    },
    {
      icon: MoreVertIcon,
      route: "/profile",
      bgcolor: "purple",
      textcolor: "white",
    },
  ];

  // const navigate = useNavigate();
  const location = useLocation();

  // const handleClick = () => {
  //   navigate('/Catalog')
  // };

  // const handleMenuClick = () => {
  //   navigate("/Catalog"); // Navigate to the Catalog page
  // };

  return (
    <Box flex={10} sx={{ padding: 0 }} spacing={10}>
      <Box sx={{ padding: "1px", marginTop: "20px" }}>
        <Box display="flex" flexDirection="row" sx={{ padding: "0px" }}>
          <Searchbar /> {/*Searchbarv*/}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <CustomIcon
              icon={MenuBookIcon}
              // onClick={handleMenuClick}
              textcolor="blue"
              route="/Catalog"
              sx={{
                fontSize: "40px",
                marginRight: 3,
                backgroundColor:
                  location.pathname === "/Catalog" ? "blue" : "white",
                border:
                  location.pathname === "/Catalog"
                    ? "2px solid blue"
                    : "1px solid #d6d6d6",
                color: location.pathname === "/Catalog" ? "white" : "blue",
                transition: "all 0.3s ease",
                "& .MuiSvgIcon-root": {
                  fontSize: "30px",
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ marginBottom: "10px" }}>
          <Box container spacing={2} display="flex" flexDirection="row">
            <Box
              flex={1}
              justifyContent={"space-between"}
              sx={{ marginLeft: "20px" }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  mt: "1px",
                  ml: "10px",
                  mb: "10px",
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                Cart Summary
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#919090", ml: "10px" }}
                >
                  Order ID:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "19px", fontWeight: "900" }}
                >
                  000001
                </Typography>
              </Box>
            </Box>

            <Box container spacing={0} display="flex" justifyContent="flex">
              {iconData.map((iconItem, index) => (
                <Box item key={index}>
                  <CustomIcon
                    icon={iconItem.icon}
                    route={iconItem.route}
                    bgcolor={iconItem.bgcolor}
                    textcolor={iconItem.textcolor}
                    sx={{
                      margin: 0,
                      backgroundColor: "white",
                      color: "gray",
                      mr: "25px",
                      "& .MuiSvgIcon-root": {
                        fontSize: "30px",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Table /> {/*call the table  */}
    </Box>
  );
}

export default CartSummary;
