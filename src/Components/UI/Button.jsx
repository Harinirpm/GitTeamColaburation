import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(MuiButton)(({ bgcolor, textcolor }) => ({
  backgroundColor: bgcolor || "white", 
  color: textcolor || "black",      
  padding: '10px 20px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: textcolor || "#4287f5", 
    color: bgcolor || "white",           
  },
}));


function CustomButton({ 
  text = "Click Me", 
  variant = "contained", 
  bgcolor, 
  textcolor, 
  route, 
  startIcon, 
  endIcon ,
  sx={},
}) {

  const navigate = useNavigate();

  const handleClick = () => {
     if(route){
      navigate(route);
     }
  }
  return (
    <StyledButton
      variant={variant}
      bgcolor={bgcolor}
      textcolor={textcolor}
      onClick={handleClick}
      route={route}
      startIcon={startIcon}   
      endIcon={endIcon} 
      sx={sx}     
    >
      {text}
    </StyledButton>
  );
}

export default CustomButton;


{/* <CustomButton 
text="Submit" 
bgcolor="blue" 
textcolor="white" 
onClick={handleClick} 
sx={{ margin: 2, boxShadow: 3 }} 
/> */}
