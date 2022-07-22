import { Typography } from "@mui/material";
import NewForm from "../Component/NewForm";

const NewPageSurvey = () => {
  return (
    <div>
      <Typography
        variant="body2"
        color="#aa717e"
        align="center"
        sx={{
          margin: "20px",
          border: "10px",
          borderColor: "black",
          borderRadius: "25px",
          width: "400px",
          height: "400px",
          color: "#aa717e",
          fontFamily: "Open Sans",
          position: "absolute",
          top: "50px",
          left: "150px",
          marginTop: "50px",
          marginLeft: "420px",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        {" "}
        Welcome to E-va Desktop App{" "}
      </Typography>
      <NewForm />
    </div>
  );
};

export default NewPageSurvey;
