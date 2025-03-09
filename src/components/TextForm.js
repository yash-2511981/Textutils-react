import React,{useState} from "react";
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const textReg = /[A-Za-z]/;

    //function for uppercase
    const convertUpper = ()=>{
        if(textReg.test(text)){          
          let newText = text.toUpperCase();
          setText(newText);
          props.showAlert("converted to uppercase","success")
        }else{
          setText("pagal Samjhe Hai Kya humko chup chap word likhiyega warna yahi patak ke daboch denge");
        }
    }

    //function for lowercase
    const convertLower =()=>{
        if(textReg.test(text)){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")
        }else{
          setText("abe ek bar samjh me nahi ata tereko word ...word mane to akshar");
        }
    }

    //finction for reverse the string
    const reverse =()=>{
     let newText = text.split(" ").reverse().join(" ");
      setText(newText);
      props.showAlert("reversed the string","success")
    }

    //function for clearing text
    const clearText = ()=>{
      setText("");
      props.showAlert("clear the text area","success")
    }

    //removing extra spaces
    const removeExtraspace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("successfully removed extra spaces","success")
    }

    //copy text
    const copyText = ()=>{
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("text copied on clipboard","success")
    }

    //function for handling change in input box
    const handleChange = (e)=>{
        setText(e.target.value) 
    }

    let [text,setText] = useState("");
  return (
    <div className={`my-5 p-4 text-${props.mode==="light" ? "dark":"light"} rounded rounded-4 shadow-lg border-2 bg-${props.mode}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Type text here
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="3"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary ms-3 my-2" onClick={convertUpper}>Uppercase</button>
      <button type="submit" className="btn btn-primary ms-3 my-2" onClick={convertLower}>Lowercase</button>
      <button type="submit" className="btn btn-primary ms-3 my-2" onClick={reverse}>Reverse Sentence</button>
      <button type="submit" className="btn btn-primary ms-3 my-2" onClick={removeExtraspace}>Remove spaces</button>
      <button type="submit" className="btn btn-primary ms-3 my-2" onClick={copyText}>Copy Text</button>
      <button type="submit" className="btn btn-primary ms-3 my-2" onClick={clearText}>Clear</button>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>{text.length > 0 ? text.split(' ').length : 0} words and {text.length} characters in your text</p>
        <h3>Preview Your text</h3>
        <p>{text.length >0 ? text :"Enter some text in text box"}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
};