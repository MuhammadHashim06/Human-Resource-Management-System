import { useState } from "react";
import Sidebar from "./Admin";
import Home from "./Home";
import Requests from "./Requests";
import Reports from "./Reports";
import EmployeeList from "./Employee";
import AttendanceReport from "./Attendancereport";

export default function Admin() {
  const [component, setComponent] = useState("Home");

  function onClick(name) {
    console.log("Button clicked: ", name);
    setComponent(name);
  }
  return (
    <div>
      <div className="Dashboard">
        <Sidebar prop={onClick} />
        {component === "Home" && <Home />}
        {component === "Employee" && <EmployeeList />}
        {component === "Requests" && <Requests />}
        {component === "Reports" && <Reports />}
        {component === "Attendance" && <AttendanceReport />}
      </div>
    </div>
  );
}
