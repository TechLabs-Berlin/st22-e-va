import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { common } from '@mui/material/colors';
import evalogo from './Images/evalogo.png'

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography sx={{
                  position: "absolute",
                  width: "673px",
                  height: "120px",
                  left: "58px",
                  top: "373px",
                  fontFamily: "Avenir Next",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "80px",
                  lineHeight: "150%",

                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#6E5F6A",
                  gutterBottomComponent:"div",
                }}
                  >  
                  Welcome to E-va                                            
                  </Typography>

      <Typography sx={{
        position: "absolute",
        width: "656px",
        height: "135px",
        left: "72px",
        top: "468px",
        
        fontFamily: "Avenir Next",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "30px",
        lineHeight: "150%",       
        display: "flex",
        alignItems: "center",
        
        color: "#AA9BA6",
        variant:"h2",
        gutterBottomComponent:"div"}} 
        >
      We want to make sure that you understand even more about your own body and don't lose track of it.       
      </Typography>
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "248.91px",
          height: "371.83px",
          left: "1px",
          top: "645px",
        }}
        src="https://source.unsplash.com/Iro6cBbsXOo"
      />
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "248.91px",
          height: "371.83px",
          left: "249.91px",
          top: "645px",
        }}
        src="https://source.unsplash.com/FTMPYMNw_zQ"
      />
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "248.91px",
          height: "371.83px",
          left: "497.8px",
          top: "645px",
        }}
        src="https://source.unsplash.com/bzv_zCAXgeg"
      />
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "248.91px",
          height: "371.83px",
          left: "745.69px",
          top: "645px",
        }}
        src="https://source.unsplash.com/FziTCjw9fVA"
      />
       <Box
        component="img"
        sx={{
          position: "absolute",
          width: "248.91px",
          height: "371.83px",
          left: "993.57px",
          top: "645px",
        }}
        src="https://source.unsplash.com/jVYnBn3M9R0"
      />
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "204.91px",
          height: "371.83px",
          left: "1235px",
          top: "645px",
        }}
        src="https://source.unsplash.com/XivbqAPEoJg"
      />
      <Box
      sx={{
        width: 1450,
        height: 650,
        position: "absolute",
        top: "1200px",
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
          <Box
        component="img"
        sx={{
          position: "absolute",
          width: "198px",
          height: "198px",
          left: "600px",
          top: "45px",
        }}
        src={evalogo}
      />
      
    </Box>
    
  );
}
