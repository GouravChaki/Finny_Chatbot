import React, { useState } from 'react';
import Context from './Context.js';
export default function ContextData(props) {
  const[mess,setMess]=useState('')
  return (
    <Context.Provider value={{mess,setMess}}>
        {props.children}
    </Context.Provider>
  )
}
