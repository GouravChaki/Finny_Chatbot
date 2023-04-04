import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
