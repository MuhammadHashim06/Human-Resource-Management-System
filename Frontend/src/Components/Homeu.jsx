import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './Home.css';

function Home(props) {
    const [attendanceData, setAttendanceData] = useState([]);
    const [assignmentData, setAssignmentData] = useState([]);

    useEffect(() => {
        fetchAttendanceData();
        fetchAssignmentData();
    }, []);

    const fetchAttendanceData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/getattendance/${props.id}`);
            const data = await response.json();
            setAttendanceData(data);
        } catch (error) {
            console.error('Error fetching attendance data:', error);
        }
    };

    const fetchAssignmentData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/getassignments/${props.id}`);
            const data = await response.json();
            setAssignmentData(data);
        } catch (error) {
            console.error('Error fetching assignment data:', error);
        }
    };

    useEffect(() => {
        if (attendanceData.length > 0) {
            const employeeAttendance = {};
            attendanceData.forEach((attendance) => {
                const { employee_name, STATUS } = attendance;
                if (!employeeAttendance[employee_name]) {
                    employeeAttendance[employee_name] = { late: 0, present: 0, absent: 0 };
                }
                employeeAttendance[employee_name][STATUS.toLowerCase()]++;
            });

            const labels = Object.keys(employeeAttendance);
            const data = labels.map((employee_name) => {
                const { late, present, absent } = employeeAttendance[employee_name];
                return { late, present, absent };
            });

            const ctx = document.getElementById('attendanceChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Late',
                            data: data.map((attendance) => attendance.late),
                            backgroundColor: 'rgba(255, 99, 132, 0.6)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Present',
                            data: data.map((attendance) => attendance.present),
                            backgroundColor: 'rgba(54, 162, 235, 0.6)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Absent',
                            data: data.map((attendance) => attendance.absent),
                            backgroundColor: 'rgba(255, 206, 86, 0.6)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Number of Occurrences',
                            },
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Employee Name',
                            },
                        },
                    },
                },
            });
        }
    }, [attendanceData]);

    useEffect(() => {
        if (assignmentData.length > 0) {
            const ctx = document.getElementById('assignmentChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: assignmentData.map((assignment) => assignment.TITLE),
                    datasets: [{
                        label: 'Assignment Progress',
                        data: assignmentData.map((assignment) => assignment.PROGRESS),
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Progress (%)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Title'
                            }
                        }
                    }
                }
            });
        }
    }, [assignmentData]);

    return (
        <div className="menu">
            <h1>Home</h1>
            <div className="content">
                <div className="chart-container">
                    <canvas id="attendanceChart"></canvas>
                </div>
                <div className="chart-container">
                    <canvas id="assignmentChart"></canvas>
                </div>
            </div>
        </div>
    );
}

export default Home;
