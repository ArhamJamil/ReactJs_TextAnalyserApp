import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import React from 'react'

import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  let a = document.getElementById("myNav");
  console.log(a);
  const [darkMode, setdarkMode] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const ToggleStyle = () => {
    console.log("clicked");
    if (darkMode.color == "black") {
      setdarkMode({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#0c2b40eb";
    } else {
      setdarkMode({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Navbar MyNavTitle = {3} ></Navbar> */}
      <Navbar
        MyNavTitle="CodeWithArham"
        mode={darkMode}
        setMode={ToggleStyle}
        btnText={btnText}
      ></Navbar>
      {/* <Navbar ></Navbar> */}
      <div className="container ">
        <TextForm></TextForm>
      </div>

      <div className="container">
        <About mode={darkMode} setMode={ToggleStyle} btnText={btnText}></About>
      </div>
    </>
  );
}

export default App;
