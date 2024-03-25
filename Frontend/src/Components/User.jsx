import {useState} from 'react'
import Sidebar from './Sidebar';
import Home from './Home';
import Applications from './Applications';
import Assignments from './Assignments';
import Attendance from './Attendance';

export default function User() {
    const [component, setComponent] = useState('Home');

  function onClick(name) {
    console.log("Button clicked: ", name);
    setComponent(name);
  }
  return (
    <div><div className="Dashboard">
    <Sidebar prop={onClick} />
    {component === 'Home' && <Home />}
    {component === 'Applications' && <Applications />}
    {component === 'Assignments' && <Assignments />}
    {component === 'Attendance' && <Attendance />}
  </div></div>
  )
}
