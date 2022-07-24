import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { common } from '@mui/material/colors';

export default function Footer() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>

<Box
      sx={{
        width: 1450,
        height: 650,
        position: "absolute",
        top: "3000px",
          backgroundColor: '#F4F0F1',
        
        }}    />

        <Typography sx={{
          position: "absolute",
          width: "798px",
          height: "90px",
          left: "322px",
          top: "1250px",
          
          fontFamily: 'Avenir Next',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "60px",
          lineHeight: "150%",      
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          
          color: "#AA9BA6",
            variant:"h2",
            gutterBottomComponent:"div"}} 
            >
    What our users have to say?
          </Typography>
    </Box>
)};