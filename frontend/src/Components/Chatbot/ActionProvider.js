import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const feature_1 = () => {
      const botMessage = createChatBotMessage('feature_1: ');
      setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
      }));
    }
    const feature_2 = () => {
        const botMessage = createChatBotMessage('feature_2: ');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }


    const feature_3 = () => {
          const botMessage = createChatBotMessage('feature_3: ');
          setState((prev) => ({
              ...prev,
              messages: [...prev.messages, botMessage],
          }));
    }

    const feature_4 = () => {
            const botMessage = createChatBotMessage('feature_4: ');
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
            feature_4
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;