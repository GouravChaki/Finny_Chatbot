import React from "react";
import ActionProvider from "./ActionProvider.js";
import { CustomStep } from 'react-chatbot-kit';

export default function BotOptions({ triggerNextStep }) {
  const options = [
    { text: "Hey! Do you want me to recommend stocks based on today's price?", id: 1 },
    { text: "Or I can also recommend stocks based on their future price!", id: 2 },
    { text: "Give me a company name and I'll predict their stock price for you!", id: 3 },
    { text: "You can also use me to see a company's historical data...", id: 4 },
    { text: "Do you want me to recommend stocks based on your budget?", id: 5 },
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
