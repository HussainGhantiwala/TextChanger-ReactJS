import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const[text,setText]=useState('')

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
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary ms2 my-2" onClick={upperCase}>Convert to UpperCase</button> {/**mx and my are bootstrap properties, mx gives Margin at x axis and my gives marin at y axis */}
      <button className="btn btn-primary" onClick={lowerCase}>Convert LowerCase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(' ').length} {/**This text.split('').length will split the word and the space (hence the empty string) and print number words in the sentence*/} Words and {text.length} characters found</p> {/*This {text.length} is used to count the characters in the text that the user write on the text field*/}
      <p>{0.008*text.split(' ').length}{/**This helps user know how long will it take to read a sentence from the tect field */} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>

  );
}
TextForm.propTypes={
  heading:PropTypes.string
}