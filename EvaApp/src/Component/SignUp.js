import * as React from "react";
import { Avatar } from "@mui/material";
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
import evalogo from "./HealthImages/evalogo.png";

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

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      renterPassword: data.get("confirm password"),
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
            color: "#aa717e",
            background: "#e9dadb",
            padding: "50px",
            height: "700px",
            width: "450px",
            fontFamily: "Open Sans",
            textTransform: "none",
            fontSize: "10px",
          }}
        >
          <Avatar
            sx={{ m: 1, width: "100px", height: "100px" }}
            src={evalogo}
          />

          <Typography component="h1" variant="h5">
            Sign up
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
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
                  name="confirmPassword"
                  label="Confirm Password"
                  type="confirm password"
                  id="password"
                  autoComplete="rewrite-password"
                  sx={{
                    "& fieldset": {
                      borderColor: "#6E5F6A !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree with Terms & Conditions."
                />
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
                backgroundColor: "#AA9BA6",
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="http://localhost:3000/login"
                  variant="body2"
                  sx={{
                    color: "#aa717e",
                    "&:hover": { color: "#aa717e" },
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
