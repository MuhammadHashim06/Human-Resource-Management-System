import  { useState, useEffect } from 'react';
import './Attendancereport.css';

const AttendanceReport = () => {
  const [searchType, setSearchType] = useState('name');
  const [searchInput, setSearchInput] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch('http://localhost:4000/getattendence');
      const data = await response.json();
      console.log(data);
      setAttendanceData(data);
      setFilteredData(data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      setFilteredData(attendanceData);
      return;
    }
  
    const filtered = attendanceData.filter((attendance) => {
      if (searchType === 'name') {
        return attendance.employee_name.toLowerCase().includes(searchInput.toLowerCase());
      } else if (searchType === 'date') {
        return attendance.DATE.includes(searchInput);
      }
      return true;
    });
  
    setFilteredData(filtered);
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
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Attendance Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((attendance, index) => (
              <tr key={index}>
                <td>{attendance.DATE}</td>
                <td>{attendance.employee_name}</td>
                <td>{attendance.STATUS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceReport;
