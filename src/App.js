import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

  function App() {
  const[mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#bcccdc';
      showAlert("Success,dark mode has been enabled..","success");
      document.title='Textutils-dark mode';
      // setInterval(() => {
      //   document.title='hello_ ';
      // },  2000);
      // setInterval(() => {
      //   document .title='hello_ _ ';
      // }, 4000);
       
    }
    else
    {
     setmode('light');
     document.body.style.backgroundColor='white';
     showAlert("Success,light mode has been enabled..","success");
     document.title='Textutils-light mode';
      
    }
  }
  const[alert,setAlert]=useState("null");
  const showAlert=(message,type)=>{
    setAlert({
              msg:message,
              type:type
            })
            setTimeout(() => {
              setAlert(null);
            },  2000);
  } 

   
  return (
   
 <>
  {/* // <Router> */}

            <Navbar navy="Textutils" mode={mode}  togglemode={togglemode}  />
            <Alert alert={alert}/>
          <div className="container"  >
            <Form  head="Enter your text here:" alert={alert} showAlert={showAlert} mode={mode}/> 
             <hr />
             <About/>

            {/* <Switch>
                <Route exact path="/About">
                  <About />
                </Route>
                <Route exact path="/">
                  <Form  head="Enter your text here:" alert={alert} showAlert={showAlert} mode={mode}/>
                </Route>
            </Switch> */}
          </div> 
   {/* </Router> */}
  </>
     
  );
}

export default App;
// ctrl+shift+l multiple place selection
// ctrl } move selection forward spacing
// alt+up down    move  line up down
// ctrl+d copy same linedown
// ctrl+/ comment out
 ;
 