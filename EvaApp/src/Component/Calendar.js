import { Dialog, Button, Stack, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";
import Tracker from "../Pages/Tracker";

function Dates() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cycle, setCycle] = useState(28);
  const [openTracker, setOpenTracker] = useState(false);

  console.log(cycle);
  const cycleLength = parseInt(cycle);

  const handleTrackerOpen = () => {
    setOpenTracker(!openTracker);
  };
  const handleCalendarDaySelection = (value) => {
    console.log(value);
    handleTrackerOpen();
    setSelectedDate(value);
  };

  return (
    <>
      <Dialog
        onClose={handleTrackerOpen}
        open={openTracker}
        sx={{
          "& > * > *": {
            maxWidth: "1200px !important",
          },
        }}
      >
        <Tracker handleDialogOpenClose={handleTrackerOpen} />
      </Dialog>
      <Stack
        sx={{
          boxShadow: "25px",
          p: "20px",
          margin: "20px",
          border: "10px",
          borderColor: "black",
          borderRadius: "25px",
          width: "400px",
          height: "600px",
          color: "#aa717e",
          backgroundColor: "#e9dadb",
          fontFamily: "Open Sans",
          position: "absolute",
          top: "50px",
          left: "50px",
          marginTop: "70px",
          marginLeft: "300px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <div className="text-center">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid text-center"></div>
          </nav>
        </div>
        <p className="text-center">Select Your Period Start Date</p>
        <div className="d-flex justify-content-center ">
          <Calendar
            onChange={handleCalendarDaySelection}
            value={selectedDate}
            className="calendar mt-0"
          />
        </div>
        <Box
          sx={{
            boxShadow: "20px",
            p: "50px",
            margin: "50px",
            marginLeft: "5px",
            marginTop: "20px",
            border: "50px",
            borderColor: "#000000",
            borderRadius: "25px",
            "& > legend": { mt: 2 },
            backgroundColor: "#F4F0F1",
            color: "#C46471",
            padding: "20px",
            height: "150px",
            width: "300px",
            textTransform: "none",
          }}
        >
          <Button>Add a note</Button>
        </Box>

        <div>
          <Stack
            sx={{
              margin: "10px",
              marginLeft: "340px",
              marginTop: "-500px",
              transform: "rotate(90deg)",
              height: "30px",
              width: "120px",
              backgroundColor: "#DDA0AD",
              color: "#C46471",
              boxShadow: "2px",
              p: "2px",
              margin: "10px",
              border: "20px",
              borderColor: "black",
              borderRadius: "15px",
              fontSize: "16px",
              fontFamily: "Open Sans",
              textAlign: "center",
              textDecoration: "center",
            }}
          >
            Period cycle
          </Stack>
          <Stack
            sx={{
              margin: "10px",
              marginLeft: "340px",
              marginTop: "90px",
              transform: "rotate(90deg)",
              height: "30px",
              width: "120px",
              backgroundColor: "#DDA0AD",
              color: "#C46471",
              boxShadow: "2px",
              p: "2px",
              margin: "10px",
              border: "20px",
              borderColor: "black",
              borderRadius: "15px",
              fontSize: "16px",
              fontFamily: "Open Sans",
              textAlign: "center",
              textDecoration: "center",
            }}
          >
            Sexual Activity
          </Stack>
          <Stack
            sx={{
              margin: "10px",
              marginLeft: "340px",
              marginTop: "90px",
              transform: "rotate(90deg)",
              height: "30px",
              width: "120px",
              backgroundColor: "#DDA0AD",
              color: "#C46471",
              boxShadow: "2px",
              p: "2px",
              margin: "10px",
              border: "20px",
              borderColor: "black",
              borderRadius: "15px",
              fontSize: "16px",
              fontFamily: "Open Sans",
              textAlign: "center",
              textDecoration: "center",
            }}
          >
            Exercise
          </Stack>
          <Stack
            sx={{
              margin: "10px",
              marginLeft: "340px",
              marginTop: "90px",
              transform: "rotate(90deg)",
              height: "30px",
              width: "120px",
              backgroundColor: "#DDA0AD",
              color: "#C46471",
              boxShadow: "2px",
              p: "2px",
              margin: "10px",
              border: "20px",
              borderColor: "black",
              borderRadius: "15px",
              fontSize: "16px",
              fontFamily: "Open Sans",
              textAlign: "center",
              textDecoration: "center",
            }}
          >
            Mood
          </Stack>
        </div>
      </Stack>
      <Stack
        sx={{
          boxShadow: "25px",
          p: "20px",
          margin: "20px",
          border: "10px",
          borderColor: "black",
          borderRadius: "25px",
          width: "250px",
          height: "600px",
          color: "#aa717e",
          backgroundColor: "#e9dadb",
          fontFamily: "Open Sans",
          position: "absolute",
          top: "50px",
          left: "120px",
          marginTop: "70px",
          marginLeft: "700px",
          fontSize: "18px",
          fontWeight: "bold",
          fontStyle: "justfied",
        }}
      >
        <div className="text-center mt-4 p-2">
          <div className="row">
            <div class="d-flex justify-content-center">
              <div className="col-md-3 m-3 box ">
                <p>Next Period</p>
                <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 }}>
                  {selectedDate}
                </Moment>
              </div>
              <div className="col-md-3 m-3 box ">
                <p> Approximate Ovulation Day</p>
                <Moment
                  format="Do MMMM YYYY"
                  add={{ days: cycleLength - 1 - 14 }}
                >
                  {selectedDate}
                </Moment>
              </div>
              <div className="col-md-3 m-3 box ">
                <p> Start of Fertile days </p>
                <Moment
                  format="Do MMMM YYYY"
                  add={{ days: cycleLength - 1 - 19 }}
                >
                  {selectedDate}
                </Moment>
              </div>
              <div className="col-md-3 m-3 box ">
                <p> End of Fertile days </p>
                <Moment
                  format="Do MMMM YYYY"
                  add={{ days: cycleLength - 1 - 11 }}
                >
                  {selectedDate}
                </Moment>
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );
}

export default Dates;
