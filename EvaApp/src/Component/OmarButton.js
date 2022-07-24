import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Button sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "29px 53px",
        gap: "10px",

        position: "absolute",
        width: "463px",
        height: "103px",
        left: "900px",
        top: "430px",

        background: "#C46471",
        boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "20px",
        color: "#fff",
        fontFamily: "Avenir Next",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "30px",
        lineHeight: "150%",
        textAlign: "center",
        fontWidth: "335px",
        fontWeight: "45px",
        fontDisplay:"flex",
        textTransform: "none"}}
        ><Link style={{textDecoration: 'none', color:"inherit"}} to="/survey">Sign up and get started
        </Link>
      </Button>
    </Stack>
  );
}
