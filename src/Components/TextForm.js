import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleLowerCase = () => {
        //console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUpperCase = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <label forHTML="myBox" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="enter text here..."></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        {/* count words and characters */}
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Set Text Area Heading here",
};
