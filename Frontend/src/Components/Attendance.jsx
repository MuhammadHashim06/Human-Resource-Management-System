import { useState } from 'react';
import './Attendance.css';

const Attendance = () => {
    const [attendanceItems, setAttendanceItems] = useState([]);
    const [markedToday, setMarkedToday] = useState(false);

    const markAttendance = () => {
        if (markedToday) {
            alert("Attendance already marked for today!");
            return;
        }

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        let status = 'Absent';
        if (hours < 8 || (hours === 8 && minutes <= 30)) {
            status = 'Present';
        } else {
            status = 'Late';
        }

        const date = now.toDateString();
        const time = now.toLocaleTimeString();
        const newAttendanceItem = { date, time, status };
        setAttendanceItems([...attendanceItems, newAttendanceItem]);
        setMarkedToday(true);
    };

    const month = new Date().toLocaleString('default', { month: 'long' });

    return (
        <div className="Attendance">
            <h1>Attendance System</h1>
            <div id="attendanceForm" className="form">
                <h2>Mark Attendance</h2>
                <div className='button'>
                    <button onClick={markAttendance}>Mark Attendance</button>
                </div>
            </div>
            <div id="attendanceList" className="attendance-list">
                <h2>{month} Attendance History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attendance;
