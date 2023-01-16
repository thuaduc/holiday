import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hotel from "./components/Hotel/Hotel";
import ItemHotel from "./components/Hotel/ItemHotel";
import Navbar from "./components/Hotel/Navbar";

const App = () => {
  const [hotel, setHotel] = useState([]);

  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/v2/get-meta-data",
    headers: {
      "X-RapidAPI-Key": "bfa4a70454msh27af6cfad6ed384p108d01jsn55725e485aa1",
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      setHotel(response.status);
      console.log(response.status);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <Navbar></Navbar>
      <Hotel>
      </Hotel>
    </div>
  );
};

export default App;
