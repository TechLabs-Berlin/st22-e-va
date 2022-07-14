import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material/";

import Footer from "../Component/Footer";
//need to check with Soma, unable to use it dynamically

function Footer(WrappedComponent) {
  function WrapperComponent() {
    return (
      <>
        <Footer />
        <Box height={200} />
        <Grid
          id="footerframegrid"
          container
          justifyContent="center"
          spacing={0}
          minHeight="100vh"
        >
          <Grid item xs={8} md={8} justifyContent="center">
            <WrappedComponent />
          </Grid>
        </Grid>
      </>
    );
  }

  return WrapperComponent;
}

export default Footer;
