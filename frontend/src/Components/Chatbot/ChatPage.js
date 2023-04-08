import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './ChatPage.css'
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

export default function ChatPage() {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );

}