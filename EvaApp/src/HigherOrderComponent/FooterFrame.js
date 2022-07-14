import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material/";

import Footer from "../Component/Footer";
//need to check with Soma

function Footer(WrappedComponent) {
  function WrapperComponent() {
    return (
      <>
        <Navbar />
        <Box height={100} />
        <Grid
          id="appframegrid"
          container
          justifyContent="center"
          spacing={0}
          minHeight="100vh"
        >
          <Grid item xs={8} md={8} justifyContent="center">
            <WrappedComponent />
          </Grid>
        </Grid>
        <footer>
          <Box
            paddingLeft={30}
            paddingRight={30}
            sx={{
              backgroundColor: "#f9f9f9",
              height: "70px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              width="100%"
              alignItems="center"
            ></Stack>
          </Box>
        </footer>
      </>
    );
  }

  return WrapperComponent;
}

export default Footer;
