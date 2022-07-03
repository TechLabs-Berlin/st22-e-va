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

import SymptomTracker from "./Pages/SymptomTracker"
import FirstPage from "./Pages/FirstPage";
import NewPageSurvey from './Pages/NewPageSurvey';
import UserReg from './Pages/UserReg';
import PeriodTracker from './Pages/PeriodTracker';

  const App = () => (
    <Routes>
      <Route path="/firstpage" element={<FirstPage />} />
      <Route path="/survey" element={<NewPageSurvey/>}/>
      <Route path="/symptomtracker" exact element={<SymptomTracker />} />
      <Route path="/signup" element={<UserReg />} />
      <Route path="/periodtracker" element={<PeriodTracker />}/>
     
      </Routes>
  )



export default App;
