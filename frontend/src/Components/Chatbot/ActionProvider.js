import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children,parse }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const feature_1 = () => {
    //recommend stock on user budget
    const botMessage = createChatBotMessage('Enter your budget as as [ Budget: (amount) ]  ');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const feature_2 = () => {
    //recommend stock on future price
    const botMessage = createChatBotMessage('Enter data in the following format NASDAQ1: (code1) (code2) (number of days)');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const feature_3 = () => {
    //find future price of a stock
    const botMessage = createChatBotMessage('Enter a NASDAQ Code as [ NASDAQ2: (code) ] and number of days');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const feature_4 = () => {
    //historical data of a company
    const botMessage = createChatBotMessage('Enter a NASDAQ Code and date as [ NASDAQ3: (code) Date: (YYYY-MM-DD) ] : ');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const recommend1 = () => {
    //This is to recommend a company to the user
    const botMessage = createChatBotMessage('Companies you should invest in: ');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

  }
  
  const recommend2 = () => {
    //this is to let the user know what the stock price is
    const botMessage = createChatBotMessage('The Stock Price is: ');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const showData = () => {
    //this is to show user historical data
    const botMessage = createChatBotMessage('Historical Data: ');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const wrongInput = () => {
    //this is for incorrect inputs
    const botMessage = createChatBotMessage('Sorry I did not understand.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            feature_1,
            feature_2,
            feature_3,
            feature_4,
            recommend1,
            recommend2,
            showData,
            wrongInput,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;