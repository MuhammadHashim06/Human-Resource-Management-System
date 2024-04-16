import { useState, useEffect } from 'react';
import './Attendance.css';

const Attendance = (props) => {
    const [attendanceItems, setAttendanceItems] = useState([]);
    const [markedToday, setMarkedToday] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAttendance();
    }, []);

    const markAttendance = async (event) => {
        event.preventDefault(); // Prevent default form submission

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
        } else if (hours < 12 || (hours === 12 && minutes === 0)) {
            status = 'Late';
        }

        const date = new Date().toISOString().split('T')[0];
        const time = now.toLocaleTimeString();
        // const newAttendanceItem = { date, time, status };
        // setAttendanceItems([...attendanceItems, newAttendanceItem]);
        try {
            const response = await fetch('http://localhost:4000/attendance/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employee_id: props.id,
                    date: date,
                    time: time,
                    status: status,
                }),
            });
            if (response.ok) {
                setMarkedToday(true);
                fetchAttendance();
            } else {
                console.error('Failed to mark attendance');
            }
        } catch (error) {
            console.error('Error marking attendance:', error);
        }
    };

    const fetchAttendance = async () => {
        try {
            const response = await fetch(`http://localhost:4000/getattendence/${props.id}`);
            const data = await response.json();
            setAttendanceItems(data);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.error('Error fetching attendance:', error);
        }
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
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    attendanceItems.length > 0 ? (
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
                                        <td>{item.DATE}</td>
                                        <td>{item.TIME}</td>
                                        <td>{item.STATUS}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No attendance records found.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Attendance;
