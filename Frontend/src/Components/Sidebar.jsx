import './Sidebar.css';

function Sidebar(props) {
  const handleClick = (e) => {
    const componentName = e.target.id;
    props.onClick(componentName);
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
          <li id="Home" className="menu-link" onClick={handleClick}>Home</li>
          <li id="Attendance" className="menu-link" onClick={handleClick}>Attendance</li>
          <li id="Assignments" className="menu-link" onClick={handleClick}>Assignments</li>
          <li id="Applications" className="menu-link" onClick={handleClick}>Applications</li>
          <li id="Login" className="menu-link" onClick={handleClick}>Log out</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
