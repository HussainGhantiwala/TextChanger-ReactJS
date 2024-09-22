import React, {useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState('Enter a Text!')

  const upperCase=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    // console.log('This is UpperCase')
  }
   
  const handleOnChange=(event)=>{
    setText(event.target.value)
    // console.log("You typed?")
  }
  const lowerCase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    // console.log("This is LowerCase")
  }
   
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={upperCase}>Convert to UpperCase</button>
      <button className="btn btn-primary ms-2" onClick={lowerCase}>Convert LowerCase</button>
    </div>

  );
}