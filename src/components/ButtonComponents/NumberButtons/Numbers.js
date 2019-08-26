import React from "react";

//importing numbers data
import { numbers } from "../../../data.js";

//
import { NumberButton } from "./NumberButton.js";


console.log(numbers);
//import any components needed

//Import your array data to from the provided data file

export const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className='number-block'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
      
      
          numbers.map((number, index) => {
            return <NumberButton key={index} text={number} display={props.display} func={props.updateDisplay}/>
          })
          
      
       }

    </div>
  );
};
