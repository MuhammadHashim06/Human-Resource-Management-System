import { useState } from "react";
import Sidebar from "./Admin";
import Home from "./Home";
import Requests from "./Requests";
import Reports from "./Reports";
import EmployeeList from "./Employee";
import AttendanceReport from "./Attendancereport";

export default function Admin(props) {
  const [component, setComponent] = useState("Home");

  function onClick(name) {
    console.log("Button clicked: ", name);
    setComponent(name);
    console.log(props.data);
  }

  return (
    <div>
      <div className="Dashboard">
        <Sidebar prop={onClick} Cuser={props.data} />
        {component === "Home" && <Home />}
        {component === "Employee" && <EmployeeList />}
        {component === "Requests" && <Requests />}
        {component === "Reports" && <Reports />}
        {component === "Attendance" && <AttendanceReport />}
      </div>
    </div>
  );
}
