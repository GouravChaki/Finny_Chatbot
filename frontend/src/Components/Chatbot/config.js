import { createChatBotMessage } from 'react-chatbot-kit';
import BotOptions from './BotOptions';

const botName = 'Finny';

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`,
        {
            widget: "botOptions",
        }),],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#4EAAFF',
        },
        chatButton: {
            backgroundColor: '#005BAF',
        },
    },
    widgets: [
        {
            widgetName: "botOptions",
            widgetFunc: (props) => <BotOptions {...props}/>,
        },
    ],
};

export default config;