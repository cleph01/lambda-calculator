import React from "react";

export const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className="numberButton" onClick={ (e) => { (props.display == '' ) ? e.preventDefault() : (props.text == '=') ? props.func(eval(props.display)) : props.func(props.display+props.text)}}>{props.text}</button>
        
      }
    </>
  );
};
