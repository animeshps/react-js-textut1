import { clear } from "@testing-library/user-event/dist/clear"
import React, { useState } from "react"

import PropTypes from "prop-types"

export default function Form(props) {
  const [text, utext] = useState("write here");
  const onclicking = () => {
    console.log("click is done");
    let newtext = text.toUpperCase();
    utext(newtext)
    props.showAlert("Text converted to Upper case..","success");
  
};
const onclicking2 = () => {
  console.log("click is done2");
  let newtext =text.toLowerCase();
  utext(newtext)
  props.showAlert("Text converted to Lower case..","success");
    
  };
  // const handlechange = () => {
    //   console.log("change cleardone");
    //   utext("");
    
    // };
    const handleCopy=()=>{
      console.log("I am a copy");
      var text=document.getElementById("my box");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied..","success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      utext(newText.join(" "))
      props.showAlert("Removed extra spaces..","success");
    }
    const handle2change = (event) => {
      console.log("changedone");
      utext(event.target.value);
    };
    const onclear = () => {
      console.log("cleardone");
      utext("");
      props.showAlert("Text has been Cleared..","success");

  };
  return (
    <div>
      <div className="mb-3">
        <h4>  <label htmfor="exampleFormControlTextarea1"  className={` form-label my-2  text-${props.mode==='light'?'black':'white'} `}>{props.head} </label></h4>
              <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#D3D3D3':'white'}}  value={text} onChange={handle2change} id="my box"   rows="8"></textarea>
              <button type="button" onClick={onclicking} className="btn btn-primary my-2 mx-2">Convert to uppercase</button> 
              <button type="button" onClick={onclicking2} className="btn btn-primary my-2 mx-2">Convert to lowercase</button>
              <button type="button" onClick={handleCopy} className="btn btn-primary my-2 mx-2">Copy Text</button>
              <button type="button" onClick={handleExtraSpaces} className="btn btn-primary my-2 mx-2">Remove extra spaces</button><br />
              <button type="button" onClick={onclear} className="btn btn-danger my-2 mx-2">Clear Text</button>
        <br/>
      </div>
      <div className={`container text-${props.mode==='light'?'black':'white'}`}>
        <h2>Your text summary:</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>preview</h2> <br />
        <p>{text.length>0?text:"enter your text to preview it here"}</p>
      </div>
    </div>
  );
}
