import React from "react";

const Display = (props) => {
  return <div className='display'>
            <div className='output'>{ props.output }</div>
          </div>;
};

export default Display;