import React from "react";
import Box from '@mui/material/Box';
import "./header.css";
import { useHistory } from "react-router";

const Header = ({ children:Rose }) => {
  const history = useHistory()
    return (
        <Box className = "header" >
    <Box onClick={()=>history.push("/")} className="vs"><img src="/logo.jpeg" alt="xflix-con"></img></Box>
    {Rose }
        
      </Box>

    );



};

export default Header