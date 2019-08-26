import React from "react";

export const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className={props.text == '0' ? "zeroButton" : "numberButton"} onClick={() => props.func(props.display+props.text)}>{props.text}</button>
      }
    </>
  );
};
