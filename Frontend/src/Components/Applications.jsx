import { useState, useEffect } from 'react';
import './Application.css';

const Applications = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [applications, setApplications] = useState([]);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch('http://localhost:4000/getapplications');
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = async (event) => {
        
        try {
            const response = await fetch('http://localhost:4000/addapplications/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employee_id: props.id,
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
                console.log(applications);
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
                                <th>Subject</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, index) => (
                                application.EMPLOYEEID==props.id &&
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{application.SUBJECT}</td>
                                    <td>{application.STATUS}</td>
                                    <td>{application.DATE}</td>
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
