import React, { useState } from 'react';
import './Attendancereport.css'
const AttendanceReport = () => {
  const [searchType, setSearchType] = useState('name');
  const [searchInput, setSearchInput] = useState('');
  const [attendanceData, setAttendanceData] = useState(null);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic based on searchType and searchInput
    // Update attendanceData with the result
  };

  return (
    <div className='menu'>
      <h2>Attendance Report</h2>
      <div>
        <label>
          <input
            type="radio"
            value="name"
            checked={searchType === 'name'}
            onChange={handleSearchTypeChange}
          />
          Search by Name
        </label>
        <label>
          <input
            type="radio"
            value="date"
            checked={searchType === 'date'}
            onChange={handleSearchTypeChange}
          />
          Search by Date
        </label>
      </div>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder={searchType === 'name' ? 'Enter employee name' : 'Enter date (YYYY-MM-DD)'}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {attendanceData && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Attendance Status</th>
                <th>Worked Hours</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((attendance) => (
                <tr key={attendance.date}>
                  <td>{attendance.date}</td>
                  <td>{attendance.name}</td>
                  <td>{attendance.status}</td>
                  <td>{attendance.workedHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AttendanceReport;
