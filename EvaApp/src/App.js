import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewPageSurvey from "./Pages/NewPageSurvey";
import UserReg from "./Pages/UserReg";
import PeriodTracker from "./Pages/PeriodTracker";
import Login from "./Pages/Login";
import Library from "./Pages/Library";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Rating from "./Pages/Rating";

const App = () => (
  <Routes>
    <Route path="/survey" element={<NewPageSurvey />} />
    <Route path="/signup" element={<UserReg />} />
    <Route path="/periodtracker" element={<PeriodTracker />} />
    <Route path="/login" element={<Login />} />
    <Route path="/health" element={<Library />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/rateus" element={<Rating />} />
  </Routes>
);

export default App
