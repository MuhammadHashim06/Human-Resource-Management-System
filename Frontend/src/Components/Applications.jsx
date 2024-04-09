import { useState, useEffect } from 'react';
import './Application.css';

const Applications = () => {
    const [showForm, setShowForm] = useState(false);
    const [applications, setApplications] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        // Fetch employee ID dynamically here
        setEmployeeId('employee_id_here');
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch('http://localhost:4000/getapplications');
            const data = await response.json();
            setApplications(data.applications);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('your_api_endpoint_here', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employeeId: employeeId,
                    subject: subject,
                    description: body,
                    date: new Date().toISOString().slice(0, 10), // yyyy-mm-dd format
                    status: 'Pending',
                }),
            });
            if (response.ok) {
                const data = await response.json();
                setApplications([...applications, data.application]);
                setSubject('');
                setBody('');
                setShowForm(false);
            } else {
                console.error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <>
            <div className="applicationform" style={{ display: showForm ? 'grid' : 'none' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="subject">Subject:</label><br />
                    <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required /><br /><br />
                    <label htmlFor="body">Description:</label><br />
                    <textarea id="body" name="body" rows="5" value={body} onChange={(e) => setBody(e.target.value)} required></textarea><br /><br />
                    <div className='button'>
                        <input type="submit" value="Submit" />
                        <input type="button" value="Cancel" onClick={toggleForm} />
                    </div>
                </form>
            </div>
            <div className="Application">

                <div className="menu">
                    <div className="menu-toggle-btn"><i className="fas fa-bars"></i></div>
                    <div className="menunavigation">
                        <h1>Applications Page</h1>
                        <span id="newrequest" onClick={toggleForm}>New +</span>
                    </div>

                    <table id="applicationTable">
                        <thead>
                            <tr>
                                <th>Sr #</th>
                                <th>Employee ID</th>
                                <th>Subject</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, index) => (
                                <tr key={application.id}>
                                    <td>{index + 1}</td>
                                    <td>{application.employeeId}</td>
                                    <td>{application.subject}</td>
                                    <td>{application.status}</td>
                                    <td>{application.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Applications;
