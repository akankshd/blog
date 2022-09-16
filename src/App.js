import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; //10
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  

  const signUserOut = () => {
    signOut(auth).then (() => {
      localStorage.clear();           
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }
  
		
			// Function to format 1 in 01
			

  return (
  <Router>
    <nav>
      <Link to="/" className="b"> Home </Link>
      
      {!isAuth ? (
      <Link to="/login"> Login </Link> 
      ) : ( 
      <>
        <Link to="/createpost">Create Post</Link>
        <button className="a" onClick={signUserOut}> Logout </button>
        <h4 id="time" className="time"></h4>
      </>
      )}
    </nav> 
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} />} />
      <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />

    </Routes> 
    </Router>
  )
}

export default App;
