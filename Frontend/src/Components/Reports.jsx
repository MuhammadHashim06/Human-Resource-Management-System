import { useState, useEffect } from "react";

const Reports = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [aemployees, setaemployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    availableEmployees();
    fetchEmployees();
  }, []);

  const availableEmployees = async () => {
    try {
      const response = await fetch("http://localhost:4000/getemployee");
      const data = await response.json();
      const adminEmployees = data.filter((aemployees) => aemployees.ROLE == "Employee");
      setaemployees(adminEmployees);
      console.log(aemployees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:4000/getassignments");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const assignTask = (employeeId) => {
    setSelectedEmployee(employeeId);
    setShowModal(true);
  };

  const handleAssignTask = async () => {
    if (!selectedEmployee) {
      alert("Please select an employee");
      return;
    }

    if (!title.trim()) {
      alert("Please enter a title for the task");
      return;
    }

    if (!description.trim()) {
      alert("Please enter a description for the task");
      return;
    }

    if (!dueDate) {
      alert("Please select a due date for the task");
      return;
    }
    const datenow = new Date().toISOString().split('T')[0];

    try {
      const response = await fetch("http://localhost:4000/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: selectedEmployee,
          title,
          description,
          dueDate,
          datenow,
        }),
      });
      if (response.ok) {
        fetchEmployees();
        setSelectedEmployee(null);
        setTitle("");
        setDescription("");
        setDueDate("");
        setShowModal(false);
      } else {
        console.error("Failed to assign task");
      }
    } catch (error) {
      console.error("Error assigning task:", error);
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Assign Task</h2>
            <label htmlFor="employee">Employee:</label>
            <select
              id="employee"
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
            >
              <option value="" disabled>
                Select Employee
              </option>
              {aemployees.map((aemployee) => (
                <option key={aemployee.ID} value={aemployee.ID}>
                  {aemployee.NAME}
                </option>
              ))}
            </select>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <button onClick={handleAssignTask}>Assign Task</button>
          </div>
        </div>
      )}
      <div className="menu">
        <h2>Employee Progress Report</h2>
        <button onClick={() => assignTask(null)}>Assign New Task</button>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Tasks Title</th>
              <th>Tasks Status</th>
              <th>Tasks Progress</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.ID}>
                <td>{employee.employee_name}</td>
                <td>{employee.TITLE}</td>
                <td>{employee.STATUS}</td>
                <td>{employee.PROGRESS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reports;
