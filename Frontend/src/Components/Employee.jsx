import { useState } from 'react';
import './EmployeeDetails.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', department: 'IT' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', department: 'HR' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', department: 'Finance' }
    ]);

    const [editEmployeeId, setEditEmployeeId] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newDepartment, setNewDepartment] = useState('');
    const [isAddingEmployee, setIsAddingEmployee] = useState(false);

    const openEditModal = (id, name, email, department) => {
        setEditEmployeeId(id);
        setNewName(name);
        setNewEmail(email);
        setNewDepartment(department);
    };

    const closeEditModal = () => {
        setEditEmployeeId(null);
        setIsAddingEmployee(false);
    };

    const saveChanges = () => {
        setEmployees(employees.map(employee =>
            employee.id === editEmployeeId ? { ...employee, name: newName, email: newEmail, department: newDepartment } : employee
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
        const newId = Math.max(...employees.map(employee => employee.id)) + 1;
        const newEmployee = { id: newId, name: newName, email: newEmail, department: newDepartment };
        setEmployees([...employees, newEmployee]);
        closeEditModal();
    };

    return (<>{(editEmployeeId !== null || isAddingEmployee) && (
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
                            <td>
                                <button onClick={() => openEditModal(employee.id, employee.name, employee.email, employee.department)}>Edit</button>
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
