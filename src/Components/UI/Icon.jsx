import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ bgcolor, textcolor }) => ({
  backgroundColor: bgcolor || "transparent",
  color: textcolor || "black",
  padding: "10px",
  // height:"60px",
  // width:"60px",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: textcolor || "lightgray",
    color: bgcolor || "pink",
  },
  border:"1px solid #d6d6d6",
  boxShadow:"0px 100px 15px rgba(255, 255, 255, 0.6)"
}));

function CustomIcon({ icon: Icon, bgcolor, textcolor, route, text, sx = {} }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };
  return (
    <StyledIconButton
      onClick={handleClick}
      bgcolor={bgcolor}
      route={route}
      textcolor={textcolor}
      sx={sx}
    >
      <Icon />
      {text}
    </StyledIconButton>
  );
}

export default CustomIcon;


//     <div>
//       <CustomIcon 
//         icon={HomeIcon} 
//         to="/home"      
//         bgcolor="blue" 
//         textcolor="white" 
//         sx={{ margin: 1 }}
//       />