import React from "react";
import { useHistory } from "react-router-dom";

const Success = () => {
   const history =  useHistory();

   const buttonHandler = () => {
       history.replace('/');
   }
  return (
      <React.Fragment>
         <h1>Success!! (API ERROR 429, too much requests!)</h1>
         <button onClick={buttonHandler}>Press to redirect to homepage.</button>

      </React.Fragment>
  );
};

export default Success;
