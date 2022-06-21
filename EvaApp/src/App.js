import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  IconButton,
  Link,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material/';
import SnehaButton from './Component/SnehaButtom';



import './App.css';
import axios from 'axios';

import LandingPage from "./Pages/LandingPage"
import FirstPage from "./Pages/FirstPage";
import NewPageSurvey from './Pages/NewPageSurvey';
import UserReg from './Pages/UserReg';

/*
const App = () {}
  useEffect(() => {
    async function fetchData() {
      let something = "";
      try {
        something = await axios.get("http://localhost:8080");
      } catch (err) {
        console.log("error happened");
        console.log(err);
      }

      console.log(something);
    }
    fetchData();
  }, []);
  
    return (
      <div className="App">
        Hello world!!
        <Button>Register</Button>
        <SnehaButton></SnehaButton>
      </div>
    );
  }
  */

  const App = () => (
    <Routes>
      <Route path="/firstpage" element={<FirstPage />} />
      <Route path="/survey" element={<NewPageSurvey/>}/>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/signup" element={<UserReg/>}/>
    

    </Routes>
  )



export default App;
