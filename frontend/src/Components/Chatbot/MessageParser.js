import React from 'react';
import { useContext } from 'react';
import Context from '../Context_api/Context'
const MessageParser = ({ children, actions }) => {
  const a = useContext(Context)
  // var re = new RegExp("/([1-9][0-9]*)/");
  const parse = (message) => {

    const lowerCaseMessage = message.toLowerCase();
    var code;
    if (lowerCaseMessage.includes('budget')) {
      //recommend stock on user budget
      try{
      var num = lowerCaseMessage.match(/\d+\.?\d*/)[0];
      num = parseFloat(num); //num extracted to be sent to back-end
      actions.recommend1();
      }
      catch(e)
      {
        actions.wrongInput();
      }
      
    }

    if (lowerCaseMessage.includes('hello')) {
      actions.handleHello();
    }

    if (lowerCaseMessage.includes('nasdaq1')) {
      //recommend stock on future price
      try{
        lowerCaseMessage = lowerCaseMessage.replace("nasdaq1", '');
      code = lowerCaseMessage.replace(/[^A-Za-z' ']/g,'');
      lowerCaseMessage = lowerCaseMessage.replace(",", ' ');
      code = code.toUpperCase(); //NASDAQ Codes Extracted from message
      var num = lowerCaseMessage.match(/\d+\.?\d*/)[0];
      num = parseInt(num); //no. of days
      actions.recommend2();
      }
      catch(e)
      {
        actions.wrongInput();
      }
      
    }

    if (lowerCaseMessage.includes('nasdaq2')) {
      //find future price of a stock
      try{
        lowerCaseMessage = lowerCaseMessage.replace("nasdaq2", '');
      code = lowerCaseMessage.replace(/[^A-Za-z]/g,'');
      code = code.toUpperCase(); //NASDAQ Code Extracted from message
      var num = lowerCaseMessage.match(/\d+\.?\d*/)[0];
      num = parseInt(num); //no. of days
      actions.recommend2();
      }
      catch(e)
      {
        actions.wrongInput();
      }
      
    }

    if (lowerCaseMessage.includes('nasdaq3')) {
      //historical data of a company
      try{
        lowerCaseMessage = lowerCaseMessage.replace("nasdaq3", '');
      code = lowerCaseMessage.replace(/[^A-Za-z]/g,'');
      code = code.toUpperCase(); //NASDAQ Code Extracted from message
      var date = lowerCaseMessage.match('[0-9]{4}([\-/ ])[0-9]{2}[\-/ ][0-9]{2}')[0];//date extracted as string
        actions.showData();
      }
      catch(e)
      {
        actions.wrongInput();
      }
      
      
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