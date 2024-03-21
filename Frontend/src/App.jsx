import { useState } from "react";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import Applications from "./Components/Applications";
import Assignments from "./Components/Assignments";
import Attendance from "./Components/Attendance";
import './App.css';

function App() {
  const [component, setComponent] = useState('Home');

  function onClick(name) {
    console.log("Button clicked: ", name);
    setComponent(name);
  }

  return (
    <div className="Dashboard">
      <Sidebar prop={onClick} />
      {component === 'Home' && <Home />}
      {component === 'Applications' && <Applications />}
      {component === 'Assignments' && <Assignments />}
      {component === 'Attendance' && <Attendance />}
    </div>
  );
}

export default App;
