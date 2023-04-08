import React from 'react';
import {useContext} from 'react';
import Context from '../Context_api/Context'
const MessageParser = ({ children, actions }) => {
  const a=useContext(Context)
  // var re = new RegExp("/([1-9][0-9]*)/");
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
        actions.handleHello();
    }
  if (lowerCaseMessage.includes('nasdaq1')) {
    //recommend stock on future price
       actions.recommend2();
   }
   if (lowerCaseMessage.includes('nasdaq2')) {
    //find future price of a stock
    actions.recommend2();
}
if (lowerCaseMessage.includes('nasdaq3')) {
  //historical data of a company
  actions.showData();
}
if (lowerCaseMessage.includes('budget')) {
  console.log(message)
  //recommend stock on user budget
     actions.recommend1();
 }
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