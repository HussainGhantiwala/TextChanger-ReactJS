
import './App.css';
import React, { useState } from 'react';

// import AboutTwo from './components/AboutTwo';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light') //It shows whether dark mode is unabled or not. 
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({ //i am using a usestate to set state of the Alert message based on what kind of alert message it has..thats why i kept it an object to add a text of the alert and kind of an alert.
      msg:message,
      type:type
    }) //i am using a settime out function to add a logic where i want the alert to dismiss after 2 seconds 
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#1E1E1E'; //I have used an inner html
      showAlert('Dark mode has been enabled','success') //Now since we already set an SetAlert we'll use ShowAlert to see what kind of alert it is.
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
      <Navbar title="TextChanger" homeText="Home" aboutText="About us" mode={mode} toggleMode={toggleMode}/> {/*This is made using props*/}
      <Alert alert={alert}/>
      <div className="container my-3" >
        <TextForm heading={'Enter your text here'} mode={mode} showAlert={showAlert}/> {/**Here we will add props to the TextForm file */}
        {/* <AboutTwo title={"About Us"}/> */}
      </div>
    </>
  );
}
export default App; 
