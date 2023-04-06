import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#fafafa',
  fontFamily: 'Inter',
  headerBgColor: '#0085FF',
  headerFontColor: '#FFFFFF',
  headerFontSize: '15px',
  botBubbleColor: '#4EAAFF',
  botFontColor: '#fff',
  userBubbleColor: '#005BAF',
  userFontColor: '#fafafa',
};

const config ={
    width: "100%",
    height: "100%", 
  };

const steps=[
    {
      id:'intro', 
      message:'Welcome! I am Finny the ChatBot! Here are some questions we can start with:', 
      trigger: 'options',
  },
  {
    id: 'options',
    message: 'Question1, Question 2, Question 3.',
    trigger: 'user-response',
  },
  {
    id: 'user-response',
    options:[
      {value:'1', label:'Option 1', trigger:'q1'},
      {value:'2', label:'Option 2', trigger:'q2'},
      {value:'3', label:'Option 3', trigger:'q3'},
      ] ,
  },
  {
    id: 'q1',
    message: 'Here\'s your answer: 1',
    trigger: 'continue',
  },
  {
    id: 'q2',
    message: 'Here\'s your answer: 2',
    trigger: 'continue',
  },
  {
    id: 'q3',
    message: 'Here\'s your answer: 3',
    trigger: 'continue',
  },
  {
    id: 'continue',
    message: 'Do you want to continue? (y/n)',
    trigger: 'user-continue-response',
  },
  {
    id: 'user-continue-response',
    options:[
      {value:'y', label:'Yes', trigger: 'user-response'},
      {value:'n', label:'No', trigger:'byebye'},
      ],
  },
  {
    id: 'byebye',
    message: 'Bye! See you next time!',
    end: true,
  }
];
function Chat() {

  return(
    <ThemeProvider theme={theme}>
        <ChatBot steps={steps}
        {...config}/>
    </ThemeProvider>
  );
}


export default Chat;