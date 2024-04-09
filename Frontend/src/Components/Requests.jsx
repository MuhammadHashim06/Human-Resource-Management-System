import { useState, useEffect } from "react";
import "./Requests.css";

const Requests = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch("http://localhost:4000/getapplications");
      const data = await response.json();

      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const handleSelectApp = (appId) => {
    setSelectedApp(appId);
    setShowModal(true);
  };

  const handleStatusChange = async (newStatus) => {
    try {
      await fetch(`http://localhost:4000/updatestatus/${selectedApp}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      setApplications(
        applications.map((app) =>
          app.ID === selectedApp ? { ...app, status: newStatus } : app
        )
      );
      setSelectedApp(null);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      {showModal && selectedApp !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              X
            </span>
            <h3>{applications.find((app) => app.ID === selectedApp).SUBJECT}</h3>
            <p>{applications.find((app) => app.ID === selectedApp).DESCRIPTION}</p>
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
            <li key={application.ID}>
              <div
                className="app-info"
                onClick={() => handleSelectApp(application.ID)}
              >
                {/* <strong>{application.applicant}</strong> */}
                <span>{application.SUBJECT}</span>
                <span>Status: {application.STATUS}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Requests;
