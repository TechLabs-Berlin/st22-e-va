import { Dialog, Typography, Paper, Tooltip } from "@mui/material";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";
import SymptomTracker from "../Pages/SymptomTracker";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cycle, setCycle] = useState(28);
  const [openSymptomTracker, setOpenSymptomTracker] = useState(false);

  console.log(cycle);
  const cycleLength = parseInt(cycle);

  const handleSymptomTrackerOpen = () => {
    setOpenSymptomTracker(!openSymptomTracker);
  };
  const handleCalendarDaySelection = (value) => {
    console.log(value);
    handleSymptomTrackerOpen();
    setSelectedDate(value);
  };

  return (
    <>
      <Dialog onClose={handleSymptomTrackerOpen} open={openSymptomTracker}>
        <Paper>
          <SymptomTracker />
        </Paper>
      </Dialog>
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
    </>
  );
}

export default App;
