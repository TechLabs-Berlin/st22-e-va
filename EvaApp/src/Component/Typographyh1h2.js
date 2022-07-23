import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { common } from '@mui/material/colors';

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
                  Welcome to E-VA                                            
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
    </Box>
  );
}
