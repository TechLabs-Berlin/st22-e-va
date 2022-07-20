import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#aa717e" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/homepage">
        www.eva.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      subject: data.get("subject"),
      email: data.get("email"),
      message: data.get("message"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#6E5F6A",
            background: "#e9dadb",
            padding: "50px",
            height: "600px",
            width: "450px",
            fontFamily: "Open Sans",
            textTransform: "none",
            fontSize: "10px",
          }}
        >
          <Typography component="h1" variant="h5">
            Send us a Message!
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="subject"
                  name="Subject"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  autoFocus
                  sx={{
                    "& fieldset": {
                      borderColor: "#6E5F6A !important",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    "& fieldset": {
                      borderColor: "#6E5F6A !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="message"
                  id="message"
                  autoComplete="message"
                  multiline
                  rows={6}
                  sx={{
                    "& fieldset": {
                      borderColor: "#6E5F6A !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>*Required fields</Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: "#ffffff",
                backgroundColor: "#DDA0AD",
                fontWeight: "bold",
                padding: "20px",
                margin: "5px",
                height: "10px",
                width: "350px",
                buttonShadow: "10px",
                fontFamily: "Open Sans",
                textTransform: "none",
                fontSize: "17px",

                "&:hover": { backgroundColor: "#aa717e" },
              }}
            >
              Contact us now!
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
