import  { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../HRMS_LOGO.png'


function Sidebar(props) {
  const [activeItem, setActiveItem] = useState('Employee');
console.log(props);
  const handleClick = (e) => {
    const componentName = e.target.id;
    props.prop(componentName);
    setActiveItem(componentName);
  };

  return (
    <div className="sidebar">
      <div className="user">
        <img src={logo} alt="Company Logo" />
        <p>
          {props.Cuser.NAME} <br />
          <span>Web developer</span>
        </p>
      </div>
      <div className="menubar">
        <ul>
          <li id="Home" className={`menu-link ${activeItem === 'Home' ? 'active' : ''}`} onClick={handleClick}>Home</li>
          <li id="Employee" className={`menu-link ${activeItem === 'Employee' ? 'active' : ''}`} onClick={handleClick}>Employee</li>
          <li id="Attendance" className={`menu-link ${activeItem === 'Attendance' ? 'active' : ''}`} onClick={handleClick}>Attendance</li>
          <li id="Reports" className={`menu-link ${activeItem === 'Reports' ? 'active' : ''}`} onClick={handleClick}>Reports</li>
          <li id="Requests" className={`menu-link ${activeItem === 'Requests' ? 'active' : ''}`} onClick={handleClick}>Applications</li>
          <Link to={'/'}> <li id="Login" className={`menu-link ${activeItem === 'Login' ? 'active' : ''}`} onClick={handleClick}>Log out</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
