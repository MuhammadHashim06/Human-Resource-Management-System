import  { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (e) => {
    const componentName = e.target.id;
    props.prop(componentName);
    setActiveItem(componentName);
  };

  return (
    <div className="sidebar">
      <div className="user">
        <img src="../Images/Log-in_vector.png" alt="" />
        <p>
          Muhammad Hashim <br />
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
