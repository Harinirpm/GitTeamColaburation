import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
// import InfoIcon from '@mui/icons-material/Info';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function FoodItems() {
  const navigate = useNavigate();

  const itemData = [
    {
      img: 'https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/spinach-artichoke-pizza-2.jpg',
      title: 'Chicken BBQ pizza',
      variants: '2 variants',
      id: 1,
    },
    {
      img: 'https://sweetcsdesigns.com/wp-content/uploads/2023/06/air-fryer-french-fries-recipe-picture-1.jpg',
      title: 'French fries combo',
      variants: '2 variants',
      id: 2,
    },
    {
      img: 'https://www.kingarthurbaking.com/sites/default/files/styles/lg_1x_1360px/public/2019-12/step-12.jpg?itok=d_J167Hz',
      title: 'Pan pizza',
      variants: '2 variants',
      id: 3,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjpzuezmIBaVKiLM_ukDVOaYg06K7_gdn_anyF9YTq6Z4wYOKNgvPY8nx1xVaOdASswE&usqp=CAU',
      title: 'Mushroom Sandwich',
      variants: '2 variants',
      id: 4,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalufauCK0PVXX2fQ1iZOm4r8KB-iquRwcxw&s',
      title: 'Watermelon juice',
      variants: '2 variants',
      id: 5,
    },
    {
      img: 'https://www.allrecipes.com/thmb/D7DaS599F_3YYecHu0CK_MXHMMk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1652036285Air20Fried20Quick20and20Easy20Nachos-2000-c55ba88542cc444e921569e06260c582.jpeg',
      title: 'Plain Nachos',
      variants: '2 variants',
      id: 6,
    },
    {
      img: 'https://static01.nyt.com/images/2020/11/04/dining/29nachosrex2/merlin_179172954_f28f94f2-a915-4df4-8605-441f8d1ab276-articleLarge.jpg',
      title: 'Mexican Nachos with salsa',
      variants: '2 variants',
      id: 7,
    },
    {
      img: 'https://i.ytimg.com/vi/bez9THENCTw/maxresdefault.jpg',
      title: 'Grape juice',
      variants: '2 variants',
      id: 8,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM19D4ys3BnojgW3K2bwW_UXPv6CGccEPcVw&s',
      title: 'Mango juice with salad',
      variants: '2 variants',
      id: 9,
    },
  ];

  // Handle card click to navigate to the details page
  const handleCardClick = (id) => {
    navigate(`/item-details/${id}`);
  };

  return (
    <Box sx={{ marginTop: '20px',ml:"20px"}} justifyContent={'space-between'}>
      <Grid container spacing={2} >
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                maxWidth: 305,
                height:"180px",
                width:"170px",
                
                borderRadius: '12px',
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  
                },
              }}
            >
              {/* Making the entire card clickable */}
              <CardActionArea onClick={() => handleCardClick(item.id)}>
                <CardMedia
                  component="img"
                  height="90"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    objectFit: 'cover',
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{fontSize:"15px"}}>
                    {item.title}
                  </Typography>
                  <Typography variant="p" color="textSecondary">
                    {item.variants}
                  </Typography>
                </CardContent>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color:"white"
                  }}
                  aria-label="info"
                >
                 <IoIosInformationCircleOutline />
                </IconButton>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FoodItems;
