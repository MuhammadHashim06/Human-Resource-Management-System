import Login from "./Components/Login";
import "./App.css";
import Dasboard from './Components/Dasboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  function handleUser(data) {
    console.log("handle user", data);
    setUser(data);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login handleUser={handleUser} />} />
          <Route path="/Dashboard" element={<Dasboard user={user} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
