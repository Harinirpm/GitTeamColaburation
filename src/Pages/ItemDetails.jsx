import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import CustomButton from "../Components/UI/Button";
import VariantsAddonsToggle from "../Components/UI/ToggleButton";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import { IoIosInformationCircleOutline } from "react-icons/io";

const itemData = [
  {
    img: "https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/spinach-artichoke-pizza-2.jpg",
    title: "Chicken BBQ Pizza",
    description: "Chicken BBQ pizza with Mexican flavoured toppings",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 1,
  },
  {
    img: "https://sweetcsdesigns.com/wp-content/uploads/2023/06/air-fryer-french-fries-recipe-picture-1.jpg",
    title: "French fries combo",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 2,
  },
  {
    img: "https://www.kingarthurbaking.com/sites/default/files/styles/lg_1x_1360px/public/2019-12/step-12.jpg?itok=d_J167Hz",
    title: "Pan pizza",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 3,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjpzuezmIBaVKiLM_ukDVOaYg06K7_gdn_anyF9YTq6Z4wYOKNgvPY8nx1xVaOdASswE&usqp=CAU",
    title: "Mushroom Sandwich",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 4,
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbellyfull.net%2Fwatermelon-juice%2F&psig=AOvVaw1b1xQm7-tCtj165ecOQ107&ust=1727260749463000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJC_nO2x24gDFQAAAAAdAAAAABAE",
    title: "Watermelon juice",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 5,
  },
  {
    img: "https://www.allrecipes.com/thmb/D7DaS599F_3YYecHu0CK_MXHMMk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1652036285Air20Fried20Quick20and20Easy20Nachos-2000-c55ba88542cc444e921569e06260c582.jpeg",
    title: "Plain Nachos",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 6,
  },
  {
    img: "https://static01.nyt.com/images/2020/11/04/dining/29nachosrex2/merlin_179172954_f28f94f2-a915-4df4-8605-441f8d1ab276-articleLarge.jpg",
    title: "Mexican Nachos with salsa",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 7,
  },
  {
    img: "https://i.ytimg.com/vi/bez9THENCTw/maxresdefault.jpg",
    title: "Grape juice",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 8,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM19D4ys3BnojgW3K2bwW_UXPv6CGccEPcVw&s",
    title: "Mango juice with salad",
    variant: "2 variants",
    variants: [
      { label: "Pizza (Large)", price: 800 },
      { label: "Pizza (Medium)", price: 500 },
      { label: "Pizza (Small)", price: 300 },
    ],
    id: 9,
  },
];

function ItemDetails() {
  const { id } = useParams(); // This gets the dynamic id from the route
  const item = itemData.find((i) => i.id === parseInt(id));

  const [selectedVariant, setSelectedVariant] = useState(item?.variants[0]); // Default to the first variant
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return <Typography variant="h6">Item not found!</Typography>;
  }

  const handleVariantChange = (event) => {
    const variant = item.variants.find((v) => v.label === event.target.value);
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change)); // Ensure quantity doesn't go below 1
  };

  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate("/add-to-cart");
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h6" sx={{ mb: "20px" }}>
        Variants & Add-ons
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <Badge
            badgeContent={4}
            color="primary"
            sx={{
              "& .MuiBadge-badge": {
                width: "20px",
                height: "20px",
                fontSize: "16px",
                borderRadius: "15px",
                mt: "1px",
              },
              position: "absolute",
              top: "10px",
              left: "10px",
              transform: "translate(0, 0)",
              //   fontSize:"70px"
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "1px",
              right: "1px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontSize: "17px",
            }}
            aria-label="info"
          >
            <IoIosInformationCircleOutline />
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          sx={{ ml: "40px", fontSize: "18px", color: "#414242" }}
        >
          {item.description}
        </Typography>
      </Box>
      <VariantsAddonsToggle />
      <Box sx={{ mb: "20px" }}>
        <Typography variant="h6" sx={{ mt: "20px", mb: "20px" }}>
          Quantity
        </Typography>


{/*Quantity details display */}
        <RadioGroup
          value={selectedVariant.label}
          onChange={handleVariantChange}
        >
          <Table sx={{ width: "100%", border: "none" }}>
            <TableBody>
              {item.variants.map((variant, index) => (
                <React.Fragment key={variant.label}>
                  {/* {" "} */}
                  {/* Use unique key for Fragment */}
                  <TableRow sx={{ border: "none" }}>
                    <TableCell sx={{ border: "none", padding: "10px 0" }}>
                      <FormControlLabel
                        value={variant.label}
                        control={<Radio sx={{ mr: 1 }} />}
                        label={
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "17px",
                              fontWeight: 500,
                              color: "#000",
                            }}
                          >
                            {variant.label}
                          </Typography>
                        }
                        sx={{ width: "100%" }}
                      />
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ border: "none", padding: "10px 0" }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color:
                            selectedVariant.label === variant.label
                              ? "#007bff"
                              : "#000", // Change color conditionally
                        }}
                      >
                        SAR {variant.price}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {index !== item.variants.length - 1 && (
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        sx={{ border: "none", padding: "0" }}
                      >
                        <Divider sx={{ my: 1, width: "100%" }} />
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </RadioGroup>
      </Box>


    
      <Box sx={{ mt: "180px" }}>
        <Divider sx={{ my: 1, width: "100%", mb: "10px" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "20px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              fontSize: "19px",
              letterSpacing: "0.5px",
              fontWeight: "400",
            }}
          >
            Item Total:{" "}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "20px" }}>
            SAR {(selectedVariant.price * quantity).toLocaleString()}{" "}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #d4d4d4",
              width: "180px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "8px",
              justifyContent: "space-between",
              color: "black",
            }}
          >
            <IconButton onClick={() => handleQuantityChange(-1)}>
              <Remove />
            </IconButton>
            <Typography sx={{ mx: 2 }}>{quantity}</Typography>
            <IconButton onClick={() => handleQuantityChange(1)}>
              <Add />
            </IconButton>
          </Box>

          {/* Add to Order Button */}
          <CustomButton
            variant="contained"
            text="Add to Cart"
            onClick={handleItemClick}
            route="/add-to-cart"
            sx={{
              width: "69%",
              textAlign: "center",
              color: "white",
              padding: "10x",
              fontSize: "15px",
              backgroundColor: "#327ae6",
              ml: "20px",
              borderRadius: "8px",
              textTransform: "none",
            }}
          ></CustomButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ItemDetails;
