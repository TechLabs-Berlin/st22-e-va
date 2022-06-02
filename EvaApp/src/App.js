import React, { useEffect } from 'react'
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

import logo from './logo.svg';


import './App.css';
import axios from 'axios';
function App() {
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

export default App;
