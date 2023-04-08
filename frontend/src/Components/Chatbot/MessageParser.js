import React from 'react';
import {useContext} from 'react';
import Context from '../Context_api/Context'
const MessageParser = ({ children, actions }) => {
  const a=useContext(Context)
  // var re = new RegExp("/([1-9][0-9]*)/");
  const parse = (message) => {
    if (message.includes('hello')) {
        actions.handleHello();
    }
  //   if (message.includes(re)) {
  //     actions.todayStockPriceRecommend();
  // }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;