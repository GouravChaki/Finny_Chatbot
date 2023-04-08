import React from "react";
import {useContext} from "react";
import ActionProvider from "./ActionProvider.js";
import { CustomStep } from 'react-chatbot-kit';

export default function BotOptions({ triggerNextStep ,children, actions }) {
  // const change=(event)=>{
  //   actions.todayStockPriceRecommend();
  // }
  const options = [
    { text: "Hey! Do you want me to recommend stocks based on yours's price?",handler:()=>{actions.feature_1()},id: 1 },
    { text: "Compare between two stocks",handler:()=>{actions.feature_2()}, id: 2 },
    { text: "Future price of a stock",handler:()=>{actions.feature_3()}, id: 3 },
    { text: "Historical data of a stock", handler:()=>{actions.feature_4()}, id: 4 },
  ];
  const handleClick = (value) => {
    triggerNextStep({value});
  }

  const optionsMarkup = options.map((option) => (
    <button
      type="button"
      className="btn btn-outline-primary mx-2 my-2"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <div className="d-flex align-items-start flex-wrap">{optionsMarkup}</div>
  )
};



// import React from 'react';
//

// function ButtonStep({ triggerNextStep }) {
//   const handleClick = (value) => {
//     // trigger the next step with the selected value
//     triggerNextStep({ value });
//   };

//   return (
//     <CustomStep
//       message={
//         <div>
//           <p>Please select an option:</p>
//           <button onClick={() => handleClick('Option 1')}>Option 1</button>
//           <button onClick={() => handleClick('Option 2')}>Option 2</button>
//         </div>
//       }
//     />
//   );
// }

// export default ButtonStep;
