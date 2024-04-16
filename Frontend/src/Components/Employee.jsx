import { useState, useEffect } from "react";
import "./EmployeeDetails.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newSalary, setNewSalary] = useState("");
  const [newDateofjoining, setNewDateofjoining] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("Employee"); // Default role is Employee
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/getemployee")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(employees);
  }, []);

  const openEditModal = (
    id,
    name,
    email,
    department,
    salary,
    Dateofjoining,
    password,
    role
  ) => {
    setEditEmployeeId(id);
    setNewName(name);
    setNewEmail(email);
    setNewDepartment(department);
    setNewSalary(salary);
    setNewDateofjoining(Dateofjoining);
    setNewPassword(password);
    setNewRole(role);
  };

  const closeEditModal = () => {
    setEditEmployeeId(null);
    setIsAddingEmployee(false);
  };

  const saveChanges = () => {
    if (!validateFields()) {
      return;
    }
    fetch(`http://localhost:4000/updateemployee/${editEmployeeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editEmployeeId,
        name: newName,
        email: newEmail,
        department: newDepartment,
        salary: newSalary,
        Dateofjoining: newDateofjoining,
        password: newPassword,
        role: newRole,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setEmployees(
          employees.map((employee) =>
            employee.id === editEmployeeId
              ? {
                  ...employee,
                  name: newName,
                  email: newEmail,
                  department: newDepartment,
                  salary: newSalary,
                  Dateofjoining: newDateofjoining,
                  password: newPassword,
                  role: newRole,
                }
              : employee
          )
        );
        closeEditModal();
      })
      .catch((error) => console.error("Error updating employee:", error));
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      fetch(`http://localhost:4000/deleteemployee/${id}`, {
        method: "DELETE",
      })
        .then(() =>
          setEmployees(employees.filter((employee) => employee.id !== id))
        )
        .catch((error) => console.error("Error deleting employee:", error));
    }
  };

  const addEmployee = () => {
    setIsAddingEmployee(true);
  };

  const saveNewEmployee = () => {
    if (!validateFields()) {
      return;
    }
    fetch("http://localhost:4000/insertemployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        email: newEmail,
        department: newDepartment,
        salary: newSalary,
        Dateofjoining: newDateofjoining,
        password: newPassword,
        role: newRole,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        const newId = Math.max(...employees.map((employee) => employee.id)) + 1;
        const newEmployee = {
          id: newId,
          name: newName,
          email: newEmail,
          department: newDepartment,
          salary: newSalary,
          Dateofjoining: newDateofjoining,
          password: newPassword,
          role: newRole,
        };
        setEmployees([...employees, newEmployee]);
        closeEditModal();
      })
      .catch((error) => console.error("Error adding employee:", error));
  };

  const validateFields = () => {
    if (
      !newName ||
      !newEmail ||
      !newDepartment ||
      !newSalary ||
      !newDateofjoining ||
      !newPassword
    ) {
      alert("Please fill in all fields");
      return false;
    }
    if (!validateEmail(newEmail)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      {(editEmployeeId !== null || isAddingEmployee) && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>
              &times;
            </span>
            <h2>
              {editEmployeeId !== null ? "Edit Employee" : "Add Employee"}
            </h2>
            <table>
            <tr>
            <td>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              </td>
              <td>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              </td>
              <td>
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
              />
              </td>
              <td>
              <label htmlFor="salary">Salary:</label>
              <input
                type="number"
                id="salary"
                value={newSalary}
                onChange={(e) => setNewSalary(e.target.value)}
              />
              </td>
              </tr>
              <tr>
              <td>
              <label htmlFor="Dateofjoining">Date of Joining:</label>
              <input
                type="date"
                id="Dateofjoining"
                value={newDateofjoining}
                onChange={(e) => setNewDateofjoining(e.target.value)}
              />
              </td>
              <td>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              </td>
              <td>
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              >
                <option value="Employee">Employee</option>
                <option value="Admin">Admin</option>
              </select>
              </td>
              <td>
              <button
                onClick={
                  editEmployeeId !== null ? saveChanges : saveNewEmployee
                }
              >
                {editEmployeeId !== null ? "Save Changes" : "Add Employee"}
              </button>
              </td>
              </tr>
            </table>
          </div>
        </div>
      )}
      <div className="employee">
        <h1>Employee List</h1>
        <button onClick={addEmployee}>Add Employee</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Date of Joining</th>
              <th>Password</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.ID}>
                <td>{employee.ID}</td>
                <td>{employee.NAME}</td>
                <td>{employee.EMAIL}</td>
                <td>{employee.DEPARTMENT}</td>
                <td>{employee.SALARY}</td>
                <td>{employee.DATEOFJOINING}</td>
                <td>{employee.PASSWORD}</td>
                <td>{employee.ROLE}</td>
                <td>
                  <button
                    onClick={() =>
                      openEditModal(
                        employee.ID,
                        employee.NAME,
                        employee.EMAIL,
                        employee.DEPARTMENT,
                        employee.SALARY,
                        employee.DATEOFJOINING,
                        employee.PASSWORD,
                        employee.ROLE
                      )
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
