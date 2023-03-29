import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Switch,Route,Link} from "react-router-dom";
import Login from './Components/Login/Login';
import Market from './Components/Market/Market';
import Rent from './Components/Rent/Rent';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import DataContext from './Components/Context/DataContext';
function App() {
  return (
    <DataContext>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/rent" element={<Rent/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
    </DataContext>
  );
}

export default App;
