import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import { useEffect,useState } from "react";
import Chat from './Components/Chatbot2/Chat';
import Maybeshownavbar from './Components/Maybeshownavbar/Maybeshownavbar';
//import lottie from 'lottie-web'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[count,setCount]=useState(0)
  return (
    <Chat/>
    // <Router>
    //   {/* <div className='container' ref={container}></div> */}
    //    <Maybeshownavbar>
    //      <Navbar/>
    //    </Maybeshownavbar>
    // <Routes>
    //   <Route path="/" element={<HomePage/>}></Route>
    // </Routes>
    // <Routes>
    //   <Route path="/login" element={<Login/>} count={count} setCount={setCount}></Route>
    // </Routes>
    // <Routes>
    //   <Route path="/signup" element={<Signup/>}></Route>
    // </Routes>
    // </Router>
  );
}

export default App;