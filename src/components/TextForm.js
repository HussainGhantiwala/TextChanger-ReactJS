import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text, setText] = useState('')

  const upperCase = () => {
    if (text === '') {
      props.showAlert('TextField cannot be empty', 'warning')
    } else {
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert('Text Converted to UpperCase!', 'success')
      // console.log('This is UpperCase')
    }
  }
  const copyText = () => {
    if (text === '') {
      props.showAlert('TextField cannot be empty', 'warning')
    } else {
      navigator.clipboard.writeText(text)
      props.showAlert('Copied to clipboard!', 'success')
    }
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
    // console.log("You typed?")
  }
  const clearText = () => {
    if (text === '') {
      props.showAlert('TextField cannot be empty', 'warning')
    } else {
      let newText = ''
      setText(newText)
      props.showAlert('Text Cleared!', 'success')
    }
  }
  const speech = () => {
    let msg = new SpeechSynthesisUtterance()
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const capitalizeLetter = () =>{
    if (text==='') {
      props.showAlert('TextField cannot be empty', 'warning')
    }else{
    const arr = text.split(" ")
    for(var i =0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    const newtet = arr.join(" ")
    setText(newtet)
    props.showAlert('Text has been capatilized','success')
  }
}
  const onAlternatingCase = () => {
    if (text==='') {
      props.showAlert('TextField cannot be empty','warning')
    }else{
    let newtext = ""
    for (let index = 0; index < text.length; index++) {
        if ((index % 2) === 0) {
            newtext += text[index].toLowerCase()
        }
        else {
            newtext += text[index].toUpperCase()
        }

    }
  
    setText(newtext)
    props.showAlert('Alternate casing has been implimented', 'success')
}
  }
  
  const reverse = () => {
    if (text === '') {
      props.showAlert('TextField cannot be empty', 'warning')
    } else {
      let newText = text.split('').reverse('').join('')
      setText(newText)

      props.showAlert('Text reversed!', 'success')
    }
  }
  const backToNormal = () => {
    if (text === '') {
      props.showAlert("Text field can't be empty", 'warning')
    } else {
      let splitText = text.split('');
      let reverseText = splitText.reverse('');
      let joinText = reverseText.join('');
      setText(joinText);
      props.showAlert('Text has set to normal!', 'success')
    }
  }
  const handleExtraSpace = () => {
    if (text === '') {
      props.showAlert('TextField cannot be empty', 'warning')
    } else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert('Extra spaces removed!', 'success')
    }
  }
  const lowerCase = () => {
    if (text === '') {
      props.showAlert('TextField cannot be empty', 'warning')
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Text Converted to LowerCase!', 'success')
      // console.log("This is LowerCase")
    }
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#1E1E1E' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
        </div>
        <button className="btn btn-primary my-2 my-2" onClick={upperCase}>Convert to UpperCase</button> {/**mx and my are bootstrap properties, mx gives Margin at x axis and my gives marin at y axis */}
        <button className="btn btn-primary ms-2 my-2" onClick={lowerCase}>Convert LowerCase</button>
        <button className="btn btn-primary ms-2 my-2" onClick={clearText}>Clear text</button>
        <button className="btn btn-primary ms-2 my-2" onClick={speech}>Sound On</button>
        <button className="btn btn-primary ms-2 my-2" onClick={reverse}>Reverse The Text</button>
        <button className="btn btn-primary ms-2 my-2" onClick={backToNormal}>Back to normal</button>
        <button className="btn btn-primary ms-2 my-2" onClick={copyText}>Copy text</button>
        <button className="btn btn-primary ms-2 my-2" onClick={handleExtraSpace}>Handle Extra Spaces</button>
        <button className="btn btn-primary ms-2 my-2" onClick={capitalizeLetter}>Capital Letters</button>
        <button className="btn btn-primary ms-1 my-2" onClick={onAlternatingCase}>Alternate Casing</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.trim().length}{/**This text.split('').length will split the word and the space (hence the empty string) and print number words in the sentence*/} Words and {text.length} characters found</p> {/*This {text.length} is used to count the characters in the text that the user write on the text field*/}
        <p>{0.008 * text.split(' ').length}{/**This helps user know how long will it take to read a sentence from the tect field */} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Write something in the text-form to Preview here'}</p>
      </div>
    </>

  );
}
TextForm.propTypes = {
  heading: PropTypes.string
}