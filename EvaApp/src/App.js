import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./Pages/FirstPage";
import NewPageSurvey from "./Pages/NewPageSurvey";
import UserReg from "./Pages/UserReg";
import PeriodTracker from "./Pages/PeriodTracker";
import Login from "./Pages/Login";
import Library from "./Pages/Library";
import Contact from "./Pages/Contact";
<<<<<<< HEAD
import Homepage from "./Pages/Homepage";
=======
import Tracker from "./Pages/Tracker";
import Rating from "./Pages/Rating";
>>>>>>> 0c3243a367dd014856792284c02bd16417b505d9

const App = () => (
  <Routes>
    <Route path="/firstpage" element={<FirstPage />} />
    <Route path="/survey" element={<NewPageSurvey />} />
    <Route path="/signup" element={<UserReg />} />
    <Route path="/periodtracker" element={<PeriodTracker />} />
    <Route path="/login" element={<Login />} />
    <Route path="/health" element={<Library />} />
    <Route path="/contactus" element={<Contact />} />
<<<<<<< HEAD
    <Route path="/homepage" element={<Homepage />} />
=======
    <Route path="/tracker" element={<Tracker />} />
    <Route path="/rateus" element={<Rating />} />
>>>>>>> 0c3243a367dd014856792284c02bd16417b505d9
  </Routes>
);

export default App;
