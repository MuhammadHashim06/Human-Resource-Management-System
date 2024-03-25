import React, { useState } from 'react';

const Reports = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', tasksAssigned: 5, tasksCompleted: 3, date: '2024-03-24' },
    { id: 2, name: 'Jane Smith', tasksAssigned: 3, tasksCompleted: 2, date: '2024-03-24' },
    { id: 3, name: 'Alice Johnson', tasksAssigned: 7, tasksCompleted: 5, date: '2024-03-24' },
    { id: 4, name: 'Bob Brown', tasksAssigned: 4, tasksCompleted: 4, date: '2024-03-24' },
  ]);

  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchDateChange = (e) => {
    setSearchDate(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic based on searchName and searchDate
    // Update employees with the result
  };

  return (
    <div className='menu'>
      <h2>Employee Progress Report</h2>
      <div>
        <input
          type="text"
          value={searchName}
          onChange={handleSearchNameChange}
          placeholder="Search by Name"
        />
        <input
          type="text"
          value={searchDate}
          onChange={handleSearchDateChange}
          placeholder="Search by Date (YYYY-MM-DD)"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Tasks Assigned</th>
            <th>Tasks Completed</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.tasksAssigned}</td>
              <td>{employee.tasksCompleted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
