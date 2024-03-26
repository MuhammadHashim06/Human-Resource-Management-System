import { useState } from "react";
import "./Requests.css";

const Requests = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      applicant: "John Doe",
      subject: "Vacation Request",
      status: "pending",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo odio quis tellus tincidunt, vel congue elit blandit.",
    },
    {
      id: 2,
      applicant: "Jane Smith",
      subject: "Sick Leave Request",
      status: "approved",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo odio quis tellus tincidunt, vel congue elit blandit.",
    },
    {
      id: 3,
      applicant: "Alice Johnson",
      subject: "Work from Home Request",
      status: "rejected",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo odio quis tellus tincidunt, vel congue elit blandit.",
    },
  ]);

  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectApp = (appId) => {
    setSelectedApp(appId);
    setShowModal(true);
  };

  const handleStatusChange = (newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === selectedApp ? { ...app, status: newStatus } : app
      )
    );
    setSelectedApp(null);
    setShowModal(false);
  };

  return (
    <>
      {showModal && selectedApp !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              X
            </span>
            <h3>{applications[selectedApp - 1].subject}</h3>
            <p>{applications[selectedApp - 1].details}</p>
            <div className="actions">
              <button onClick={() => handleStatusChange("approved")}>
                Approve
              </button>
              <button onClick={() => handleStatusChange("rejected")}>
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="reports">
        <h2>Application List</h2>
        <ul>
          {applications.map((application) => (
            <li key={application.id}>
              <div
                className="app-info"
                onClick={() => handleSelectApp(application.id)}>
                <strong>{application.applicant}</strong>
                <span>{application.subject}</span>
                <span>Status: {application.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Requests;
