import React from "react";

export const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className="numberButton" onClick={ (e) =>{ switch(props.text){ case 'C': props.func(''); break; case '+/-': e.preventDefault(); break; case '%':  props.func(eval(props.display)/100); break; } }}>{props.text}</button>
      }
    </>
  );
};

