import React from "react";
import { Link } from 'react-router-dom'
//import {userBudget} from "./userBudget";

export default function Chat() {
   function userBudget(e){
        console.log('hello');
    }
  return (
    <div>
        <h3 className="container mt-5">Hi I'm Finny</h3>
        <div className="d-flex flex-column align-items-center">
        <button className="btn btn-primary w-50 my-2" onClick={userBudget}>Do you want me to recommend stocks based on your budget?</button>
        <button className="btn btn-primary w-50 my-2">Or I can also recommend stocks based on their future price!</button>
        <button className="btn btn-primary w-50 my-2">Give me a company name and I'll predict their stock price for you!</button>
        <button className="btn btn-primary w-50 my-2">You can also use me to see a company's historical data...</button>
    </div>
    </div>
    

  );
}
