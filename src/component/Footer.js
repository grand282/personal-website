import React from "react";
import { Box,Typography} from '@mui/material'
const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
      <footer  className="footer">

        <Box bgcolor='#202020' sx={{
            height: '100px'
        }}>
        
            <Typography pt={5} color="whitesmoke" textAlign="center">
               All &copy; copy rights are reserved to Grand {fullYear}
            </Typography>
            
        </Box>
        
      </footer>
    );
  };
  
  export default Footer;
  