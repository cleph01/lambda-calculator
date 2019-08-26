import React from "react";

//import any components needed
import { OperatorButton } from "./OperatorButton.js";

//Import your array data to from the provided data file
import { operators } from "../../../data.js";


console.log(operators)

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operator-block">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        operators.map((operator, index) => {
          return <OperatorButton key={index} text={operator.value} display={props.display} func={props.updateDisplay} operator_arr={operators} />
        })
       
       }
    </div>
  );
};
