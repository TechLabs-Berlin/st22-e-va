import React, { useEffect } from 'react'

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
    </div>
  );
}

export default App;
