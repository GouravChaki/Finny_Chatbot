import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer'
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
import Chat from './Components/Chatbot2/Chat';
import Search from './Components/Search_History/Search';

function App() {
  const [count, setCount] = useState(0)
  return (
    <ContextData>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} count={count} setCount={setCount}/>
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
        {/* <Routes>
        <Route path="/finny" element={<ChatPage />}/>
        </Routes> */}
        <Routes>
        <Route path="/finny" element={<Chat />}/>
        </Routes>
        <Routes>
        <Route path="/search_history" element={<Search/>}/>
        </Routes>
      </Router>
    </ContextData>
  );
}

export default App;