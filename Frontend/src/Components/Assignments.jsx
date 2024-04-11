// import { useState } from "react";
// import "./Assignment.css";

// const Assignments = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedAssignment, setSelectedAssignment] = useState(null);

//   const openAssignmentModal = (
//     title,
//     assignedBy,
//     dateAssigning,
//     dueDate,
//     description,
//     progress,
//     status
//   ) => {
//     setSelectedAssignment({
//       title,
//       assignedBy,
//       dateAssigning,
//       dueDate,
//       description,
//       progress,
//       status,
//     });
//     setIsModalOpen(true);
//   };

//   const closeAssignmentModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleProgressChange = (e) => {
//     let progressValue = parseInt(e.target.value);
//     progressValue = Math.min(Math.max(progressValue, 0), 100); // Ensure progress is between 0 and 100
//     setSelectedAssignment({
//       ...selectedAssignment,
//       progress: progressValue,
//     });
//   };

//   const handleStatusChange = (status) => {
//     let progress = selectedAssignment.progress;
//     if (status === "Pending") {
//       progress = 0;
//     } else if (status === "Complete") {
//       progress = 100;
//     }
//     setSelectedAssignment({
//       ...selectedAssignment,
//       status,
//       progress,
//     });
//   };
  

//   return (
//     <>
//       {isModalOpen && (
//         <div
//           id="assignmentModal"
//           className="assignment-modal"
//           onClick={closeAssignmentModal}
//         >
//           <div
//             className="assignment-modal-content"
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//           >
//             <h2>{selectedAssignment.title}</h2>
//             <table>
//               <tr>
//                 <td>
//                   <p>
//                     <strong>Assigned By:</strong>{" "}
//                     {selectedAssignment.assignedBy}
//                   </p>
//                 </td>
//                 <td>
//                   <p>
//                     <strong>Date of Assigning:</strong>{" "}
//                     {selectedAssignment.dateAssigning}
//                   </p>
//                 </td>
//                 <td>
//                   <p>
//                     <strong>Due Date:</strong> {selectedAssignment.dueDate}
//                   </p>
//                 </td>
//               </tr>
//             </table>
//             <p>
//               <strong>Description:</strong>
//               <br />
//               <br /> {selectedAssignment.description}
//             </p>
//             <div className="progress">
//               <label htmlFor="progress">Progress:</label>
//               <input
//                 type="number"
//                 id="progress"
//                 name="progress"
//                 min="0"
//                 max="100"
//                 value={selectedAssignment.progress}
//                 onChange={handleProgressChange}
//               />
//               <div className="progress-bar">
//                 <div
//                   className="progress-bar-fill"
//                   style={{ width: `${selectedAssignment.progress}%` }}
//                 ></div>
//               </div>
//               <div className="progress-text">
//                 {selectedAssignment.progress}%
//               </div>
//             </div>
//             <div className="status">
//               <label htmlFor="status">Status:</label>
//               <select
//                 id="status"
//                 name="status"
//                 value={selectedAssignment.status}
//                 onChange={(e) => handleStatusChange(e.target.value)}
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Complete">Complete</option>
//               </select>
//             </div>
//             <div className="button">
//               <button>Save Changes</button>
//               <button onClick={closeAssignmentModal}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="menu">
//         <div className="menu-toggle-btn">
//           <i className="fas fa-bars"></i>
//         </div>
//         <h1>Assignments Page</h1>
//         <div id="assignmentsList">
//           <h2>Current Assignments</h2>
//           <div
//             className="assignment-box"
//             onClick={() =>
//               openAssignmentModal(
//                 "Assignment 1",
//                 "Admin",
//                 "February 28, 2024",
//                 "March 10, 2024",
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//                 50, // Initial progress
//                 "Pending" // Initial status
//               )
//             }
//           >
//             Assignment 1
//           </div>
//           <div
//             className="assignment-box"
//             onClick={() =>
//               openAssignmentModal(
//                 "Assignment 2",
//                 "Admin",
//                 "February 28, 2024",
//                 "March 15, 2024",
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//                 25, // Initial progress
//                 "Pending" // Initial status
//               )
//             }
//           >
//             Assignment 2
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Assignments;

import { useState } from 'react';
import './Assignment.css';

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'Assignment 1',
      status: 'Pending',
      dateAssigning: '2024-04-15',
      dueDate: '2024-04-30',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      progress: 0,
    },
    {
      id: 2,
      title: 'Assignment 2',
      status: 'InProgress',
      dateAssigning: '2024-04-10',
      dueDate: '2024-04-25',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      progress: 50,
    },
    {
      id: 3,
      title: 'Assignment 3',
      status: 'Completed',
      dateAssigning: '2024-04-05',
      dueDate: '2024-04-20',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      progress: 100,
    },
  ]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id.toString());
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData('text/plain'));
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === id ? { ...assignment, status } : assignment
    );
    setAssignments(updatedAssignments);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const openAssignmentDetails = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const closeAssignmentDetails = () => {
    setSelectedAssignment(null);
  };

  const handleProgressChange = (e) => {
    const progress = parseInt(e.target.value);
    setSelectedAssignment({
      ...selectedAssignment,
      progress: progress,
    });
  };

  const saveProgress = () => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === selectedAssignment.id ? selectedAssignment : assignment
    );
    setAssignments(updatedAssignments);
    setSelectedAssignment(null);
  };

  return (
    <>
    {selectedAssignment && (
        <div className="assignment-modal">
          <div className="assignment-modal-content">
            <h2>{selectedAssignment.title}</h2>
            <p><strong>Status:</strong> {selectedAssignment.status}</p>
            <p><strong>Date of Assigning:</strong> {selectedAssignment.dateAssigning}</p>
            <p><strong>Due Date:</strong> {selectedAssignment.dueDate}</p>
            <p><strong>Description:</strong><br />{selectedAssignment.description}</p>
            {selectedAssignment.status === 'InProgress' && (
              <>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${selectedAssignment.progress}%` }}
                  ></div>
                </div>
                <label htmlFor="progress">Progress:</label>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  min="0"
                  max="100"
                  value={selectedAssignment.progress}
                  onChange={handleProgressChange}
                />
                <button onClick={saveProgress}>Save Progress</button>
              </>
            )}
            <button onClick={closeAssignmentDetails}>Close</button>
          </div>
        </div>
      )}
      <div className="menu assignments-container">
        <div
          className="assignment-column"
          onDrop={(e) => handleDrop(e, 'Pending')}
          onDragOver={handleDragOver}
        >
          <h2>Pending</h2>
          {assignments
            .filter((assignment) => assignment.status === 'Pending')
            .map((assignment) => (
              <div
                key={assignment.id}
                className="assignment"
                draggable
                onDragStart={(e) => handleDragStart(e, assignment.id)}
                onClick={() => openAssignmentDetails(assignment)}
              >
                {assignment.title}
              </div>
            ))}
        </div>
        <div
          className="assignment-column"
          onDrop={(e) => handleDrop(e, 'InProgress')}
          onDragOver={handleDragOver}
        >
          <h2>In Progress</h2>
          {assignments
            .filter((assignment) => assignment.status === 'InProgress')
            .map((assignment) => (
              <div
                key={assignment.id}
                className="assignment"
                draggable
                onDragStart={(e) => handleDragStart(e, assignment.id)}
                onClick={() => openAssignmentDetails(assignment)}
              >
                {assignment.title}
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${selectedAssignment.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="assignment-column"
          onDrop={(e) => handleDrop(e, 'Completed')}
          onDragOver={handleDragOver}
        >
          <h2>Completed</h2>
          {assignments
            .filter((assignment) => assignment.status === 'Completed')
            .map((assignment) => (
              <div
                key={assignment.id}
                className="assignment"
                draggable
                onDragStart={(e) => handleDragStart(e, assignment.id)}
                onClick={() => openAssignmentDetails(assignment)}
              >
                {assignment.title}
              </div>
            ))}
        </div>
      </div>
      
    </>
  );
};

export default Assignments;
