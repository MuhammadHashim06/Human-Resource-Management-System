import  { useState } from 'react';
import './Sidebar.css';

function Sidebar(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (e) => {
    const componentName = e.target.id;
    props.prop(componentName); // Change props.onClick to props.prop
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
          <li id="Attendance" className={`menu-link ${activeItem === 'Attendance' ? 'active' : ''}`} onClick={handleClick}>Attendance</li>
          <li id="Assignments" className={`menu-link ${activeItem === 'Assignments' ? 'active' : ''}`} onClick={handleClick}>Assignments</li>
          <li id="Applications" className={`menu-link ${activeItem === 'Applications' ? 'active' : ''}`} onClick={handleClick}>Applications</li>
          <li id="Login" className={`menu-link ${activeItem === 'Login' ? 'active' : ''}`} onClick={handleClick}>Log out</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
