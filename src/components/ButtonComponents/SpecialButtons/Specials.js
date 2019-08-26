import React from "react";

//Import your array data to from the provided data file
import { specials } from "../../../data.js";

//import any components needed
import { SpecialButton } from './SpecialButton.js';



console.log({specials});

export const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div className='special-block'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       specials.map( (value, index) => {
          return <SpecialButton key={index} text={value} />
       })

      }
    </div>
       
  );
};
