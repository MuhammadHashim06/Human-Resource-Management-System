import { useState } from 'react';
import './EmployeeDetails.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', department: 'IT', salary: 50000, Dateofjoining: '2022-01-01', password: 'password123', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', department: 'HR', salary: 60000, Dateofjoining: '2022-02-15', password: 'abc123', role: 'Employee' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', department: 'Finance', salary: 70000, Dateofjoining: '2022-03-10', password: 'qwerty', role: 'Employee' }
    ]);

    const [editEmployeeId, setEditEmployeeId] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newDepartment, setNewDepartment] = useState('');
    const [newSalary, setNewSalary] = useState('');
    const [newDateofjoining, setNewDateofjoining] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newRole, setNewRole] = useState('Employee'); // Default role is Employee
    const [isAddingEmployee, setIsAddingEmployee] = useState(false);

    const openEditModal = (id, name, email, department, salary, Dateofjoining, password, role) => {
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
        setEmployees(employees.map(employee =>
            employee.id === editEmployeeId ? { ...employee, name: newName, email: newEmail, department: newDepartment, salary: newSalary, Dateofjoining: newDateofjoining, password: newPassword, role: newRole } : employee
        ));
        closeEditModal();
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    const addEmployee = () => {
        setIsAddingEmployee(true);
    };

    const saveNewEmployee = () => {
        if (!validateFields()) {
            return;
        }
        const newId = Math.max(...employees.map(employee => employee.id)) + 1;
        const newEmployee = { id: newId, name: newName, email: newEmail, department: newDepartment, salary: newSalary, Dateofjoining: newDateofjoining, password: newPassword, role: newRole };
        setEmployees([...employees, newEmployee]);
        closeEditModal();
    };

    const validateFields = () => {
        if (!newName || !newEmail || !newDepartment || !newSalary || !newDateofjoining || !newPassword) {
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
                        <span className="close" onClick={closeEditModal}>&times;</span>
                        <h2>{editEmployeeId !== null ? 'Edit Employee' : 'Add Employee'}</h2>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        <label htmlFor="department">Department:</label>
                        <input type="text" id="department" value={newDepartment} onChange={(e) => setNewDepartment(e.target.value)} />
                        <label htmlFor="salary">Salary:</label>
                        <input type="number" id="salary" value={newSalary} onChange={(e) => setNewSalary(e.target.value)} />
                        <label htmlFor="Dateofjoining">Date of Joining:</label>
                        <input type="date" id="Dateofjoining" value={newDateofjoining} onChange={(e) => setNewDateofjoining(e.target.value)} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <label htmlFor="role">Role:</label>
                        <select id="role" value={newRole} onChange={(e) => setNewRole(e.target.value)}>
                            <option value="Employee">Employee</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <button onClick={editEmployeeId !== null ? saveChanges : saveNewEmployee}>{editEmployeeId !== null ? 'Save Changes' : 'Add Employee'}</button>
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
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.Dateofjoining}</td>
                                <td>{employee.password}</td>
                                <td>{employee.role}</td>
                                <td>
                                    <button onClick={() => openEditModal(employee.id, employee.name, employee.email, employee.department, employee.salary, employee.Dateofjoining, employee.password, employee.role)}>Edit</button>
                                    <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
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
