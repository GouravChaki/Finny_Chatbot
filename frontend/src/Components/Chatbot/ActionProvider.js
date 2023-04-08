import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const todayStockPriceRecommend = () => {
      const botMessage = createChatBotMessage('Please enter a number: ');
      setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
      }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            todayStockPriceRecommend,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;