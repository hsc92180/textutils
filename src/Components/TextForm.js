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
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="mb-3">
        <label forHTML="myBox" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Set Text Area Heading here",
};
