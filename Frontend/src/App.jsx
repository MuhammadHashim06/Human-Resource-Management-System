import Home from "./Components/Home"
import Sidebar from "./Components/Sidebar"
// import './App.css'
import { useState } from "react"

function App() {
  const [Component, setComponent] = useState(Home);

  function  onClick(name) {
    console.log("Button clicked: ",name);
    setComponent(name);
   }
  return (
    <div className="Dasboard">
    {/* <Login/> */}
    <Sidebar prop= {onClick} />
    <Component/>
    </div>
  )
}

export default App
