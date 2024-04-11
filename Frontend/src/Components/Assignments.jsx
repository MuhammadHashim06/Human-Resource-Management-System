import { useState } from "react";
import "./Assignment.css";

const Assignments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const openAssignmentModal = (
    title,
    assignedBy,
    dateAssigning,
    dueDate,
    description,
    progress
  ) => {
    setSelectedAssignment({
      title,
      assignedBy,
      dateAssigning,
      dueDate,
      description,
      progress,
    });
    setIsModalOpen(true);
  };

  const closeAssignmentModal = () => {
    setIsModalOpen(false);
  };

  const handleProgressChange = (e) => {
    setSelectedAssignment({
      ...selectedAssignment,
      progress: e.target.value,
    });
  };

  return (
    <>
      {isModalOpen && (
        <div
          id="assignmentModal"
          className="assignment-modal"
          onClick={closeAssignmentModal}
        >
          <div className="assignment-modal-content">
            <h2>{selectedAssignment.title}</h2>
            <table>
              <tr>
                <td>
                  <p>
                    <strong>Assigned By:</strong>{" "}
                    {selectedAssignment.assignedBy}
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Date of Assigning:</strong>{" "}
                    {selectedAssignment.dateAssigning}
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Due Date:</strong> {selectedAssignment.dueDate}
                  </p>
                </td>
              </tr>
            </table>
            <p>
              <strong>Description:</strong>
              <br />
              <br /> {selectedAssignment.description}
            </p>
            <div className="progress">
              <label htmlFor="progress">Progress:</label>
              <input
                type="number"
                id="progress"
                name="progress"
                min="0"
                max="100"
                value={selectedAssignment.progress}
                onChange={handleProgressChange}
              />
            </div>
            <div className="button">
              <button>Mark as Completed</button>
              <button onClick={closeAssignmentModal}>Close</button>
            </div>
          </div>
        </div>
      )}
      <div className="menu">
        <div className="menu-toggle-btn">
          <i className="fas fa-bars"></i>
        </div>
        <h1>Assignments Page</h1>
        <div id="assignmentsList">
          <h2>Current Assignments</h2>
          <div
            className="assignment-box"
            onClick={() =>
              openAssignmentModal(
                "Assignment 1",
                "Admin",
                "February 28, 2024",
                "March 10, 2024",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                50 // Initial progress
              )
            }
          >
            Assignment 1
          </div>
          <div
            className="assignment-box"
            onClick={() =>
              openAssignmentModal(
                "Assignment 2",
                "Admin",
                "February 28, 2024",
                "March 15, 2024",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                25 // Initial progress
              )
            }
          >
            Assignment 2
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignments;
