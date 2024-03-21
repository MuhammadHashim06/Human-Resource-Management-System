import { useState } from 'react';
import './Attendance.css'
const Attendance = () => {
    const [attendanceItems, setAttendanceItems] = useState([]);

    const markAttendance = (status) => {
        const date = new Date().toDateString();
        const newAttendanceItem = { date, status };
        setAttendanceItems([...attendanceItems, newAttendanceItem]);
    };

    return (
        <div className="Attendance">
            <h1>Attendance System</h1>
            <div id="attendanceForm" className="form">
                <h2>Mark Attendance</h2>
                <div className='button'>
                <button onClick={() => markAttendance('present')}>Mark Present</button>
                <button onClick={() => markAttendance('absent')}>Mark Absent</button>
                </div>
            </div>
            <div id="attendanceList" className="attendance-list">
                <h2>Previous Attendance</h2>
                <ul id="attendanceItems">
                    {attendanceItems.map((item, index) => (
                        <li key={index}>
                            Date: {item.date}, Status: {item.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Attendance;
