import './Sidebar.css'
function Sidebar() {
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
                    <li className="menu-link"><a href="Dashboard.html" className="menu-link">Home</a></li>
                    <li><a href="Attendance.html" className="menu-link">Attendance</a></li>
                    <li><a href="Assignments.html" className="menu-link">Assignments</a></li>
                    <li><a href="Applications.html" className="menu-link">Applications</a></li>
                    <li><a href="/index.html" className="menu-link">Log out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
