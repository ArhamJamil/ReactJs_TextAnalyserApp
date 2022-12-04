import { useState } from "react";
import React from "react";

export default function TextForm() {

  const handleUpperCase = () =>{
    let a = text.toUpperCase()
    SetText(a)
  }

  const handleLowerCase = () =>{
    let a = text.toLowerCase()
    SetText(a)
  }


  const handleOnChange = (myValue) =>{
    console.log("Onchange !!!")
    SetText(myValue.target.value)
    
  }

  const ClearText = () =>{
    console.log("Cleared !!!!")
    SetText('')
  }
  
  const [text, SetText] = useState('Enter Your Text here ')
  // text = "Helloo" // wrong way to change the state
  // SetText("mY tEXT") // CORRECT WAY
  return (
    <>
      <h1><span className="badge bg-secondary my-3">Describe Yourself Below</span></h1>

      <div className="mb-4">
        
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2 my-2 "onClick={handleUpperCase}>Convert To UpperCase</button>
      <button type="button" className="btn btn-primary mx-2 my-2 " onClick={handleLowerCase}>Convert To LowerCase</button>
      <button type="button" className="btn btn-dark mx-2 my-2" onClick={ClearText}>Clear Text</button>
      <hr></hr>
    </>
  );
}
