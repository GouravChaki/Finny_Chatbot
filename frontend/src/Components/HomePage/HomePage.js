import React from 'react'
import Footer from '../Footer/Footer'
import ChatPage from '../Chatbot/ChatPage'

export default function HomePage(){
    return(
        <div className='col-md justify-content-center'>
            <ChatPage/>
            <Footer/>
        </div>
        
    )
}