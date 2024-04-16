import {useState} from 'react'
import Sidebar from './Sidebar';
import Home from './Home';
import Applications from './Applications';
import Assignments from './Assignments';
import Attendance from './Attendance';

export default function User(props) {
    const [component, setComponent] = useState('Home');

  function onClick(name) {
    console.log("Button clicked: ", name);
    setComponent(name);
  }
  return (
    <div><div className="Dashboard">
    <Sidebar prop={onClick} />
    {component === 'Home' && <Home />}
    {component === 'Applications' && <Applications name={props.data.NAME} id= {props.data.ID} />}
    {component === 'Assignments' && <Assignments name={props.data.NAME} id= {props.data.ID} />}
    {component === 'Attendance' && <Attendance name={props.data.NAME} id= {props.data.ID}/>}
  </div></div>
  )
}
