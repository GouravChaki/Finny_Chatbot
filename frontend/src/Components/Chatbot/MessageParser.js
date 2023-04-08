import React from 'react';

const MessageParser = ({ children, actions }) => {
  var re = new RegExp("/([1-9][0-9]*)/");
  const parse = (message) => {
    if (message.includes('hello')) {
        actions.handleHello();
    }
    if (message.includes(re)) {
      actions.todayStockPriceRecommend();
  }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;