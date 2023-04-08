import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import { useEffect, useState } from "react";
import Maybeshownavbar from './Components/Maybeshownavbar/Maybeshownavbar';
// import lottie from 'lottie-web'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ChatPage from './Components/Chatbot/ChatPage'
import ContextData from './Components/Context_api/ContextData';

function App() {
  const [count, setCount] = useState(0)
  return (
    <ContextData>
      <ChatPage />
      {/* <Router>
        
        <Maybeshownavbar>
          <Navbar />
        </Maybeshownavbar>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} count={count} setCount={setCount}/>
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </Router> */}
    </ContextData>
  );
}

export default App;