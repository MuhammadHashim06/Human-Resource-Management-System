import { useState } from 'react';
import './Application.css'

const Applications = () => {
    const [showForm, setShowForm] = useState(false);
    const [applications, setApplications] = useState([]);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newApplication = {
            id: applications.length + 1,
            name: 'Muhammad Hashim',
            subject: subject,
            status: 'Pending'
        };
        setApplications([...applications, newApplication]);
        setSubject('');
        setBody('');
        setShowForm(false);
    };

    return (
      <><div className="applicationform" style={{ display: showForm ? 'grid' : 'none' }}>
      <form onSubmit={handleSubmit}>
          <label htmlFor="subject">Subject:</label><br />
          <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required /><br /><br />
          <label htmlFor="body">Body:</label><br />
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
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application, index) => (
                        <tr key={application.id}>
                            <td>{index + 1}</td>
                            <td>{application.name}</td>
                            <td>{application.subject}</td>
                            <td>{application.status}</td>
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