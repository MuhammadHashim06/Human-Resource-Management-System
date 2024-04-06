import { useState } from 'react';

const Reports = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', tasksAssigned: 5, tasksCompleted: 3, date: '2024-03-24' },
        { id: 2, name: 'Jane Smith', tasksAssigned: 3, tasksCompleted: 2, date: '2024-03-24' },
        { id: 3, name: 'Alice Johnson', tasksAssigned: 7, tasksCompleted: 5, date: '2024-03-24' },
        { id: 4, name: 'Bob Brown', tasksAssigned: 4, tasksCompleted: 4, date: '2024-03-24' },
    ]);

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [showModal, setShowModal] = useState(false);

    const assignTask = (employeeId) => {
        setSelectedEmployee(employeeId);
        setShowModal(true);
    };

    const handleAssignTask = () => {
        if (!selectedEmployee) {
            alert('Please select an employee');
            return;
        }

        if (!title.trim()) {
            alert('Please enter a title for the task');
            return;
        }

        if (!description.trim()) {
            alert('Please enter a description for the task');
            return;
        }

        if (!dueDate) {
            alert('Please select a due date for the task');
            return;
        }

        // Implement logic to assign task to selected employee
        // Clear form inputs and close modal
        setSelectedEmployee(null);
        setTitle('');
        setDescription('');
        setDueDate('');
        setShowModal(false);
    };

    return (
      <>
      {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Assign Task</h2>
                        <label htmlFor="employee">Employee:</label>
                        <select id="employee" value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
                            <option value="" disabled>Select Employee</option>
                            {employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>{employee.name}</option>
                            ))}
                        </select>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <label htmlFor="dueDate">Due Date:</label>
                        <input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                        <button onClick={handleAssignTask}>Assign Task</button>
                    </div>
                </div>
            )}
        <div className='menu'>
            <h2>Employee Progress Report</h2>
            <button onClick={() => assignTask(null)}>Assign New Task</button>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Tasks Assigned</th>
                        <th>Tasks Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.tasksAssigned}</td>
                            <td>{employee.tasksCompleted}</td>
                            <td>
                                <button onClick={() => assignTask(employee.id)}>Assign Task</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        </>
    );
};

export default Reports;
