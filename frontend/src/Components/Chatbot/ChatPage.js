import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './ChatPage.css'
import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

export default function ChatPage() {
    return (
        <div className='d-flex align-items-center justify-content-center w-100 h-auto'>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );

}