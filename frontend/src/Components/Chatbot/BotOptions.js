import React from "react";

const BotOptions = (props) => {
  const options = [
    { text: "Do you want me to reccommend stock based on today's prices?", handler: () => {}, id: 1 },
    { text: "I can also predict a future stock's price!", handler: () => {}, id: 2 },
    { text: "Question 3", handler: () => {}, id: 3 },
    { text: "Question 4", handler: () => {}, id: 4 },
    { text: "Question 5", handler: () => {}, id: 5 },
  ];

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

  return <div className="d-flex align-items-start flex-wrap">{optionsMarkup}</div>;
};

export default BotOptions;