import React, { useState } from 'react';
import Widget from './Widget';

const Dashboard = () => {
  // State to manage widgets
  const [widgets, setWidgets] = useState([
    { title: 'Widget 1', content: 'This is content for Widget 1' },
    { title: 'Widget 2', content: 'This is content for Widget 2' },
  ]);

  // State to handle form input for the new widget
  const [newWidget, setNewWidget] = useState({ title: '', content: '' });

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setNewWidget({ ...newWidget, [e.target.name]: e.target.value });
  };

  // Add new widget
  const addWidget = () => {
    setWidgets([...widgets, newWidget]);
    setNewWidget({ title: '', content: '' });
    setIsModalOpen(false); // Close modal after adding
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="dashboard">
        {widgets.map((widget, index) => (
          <Widget key={index} title={widget.title} content={widget.content} />
        ))}

        {/* Add Widget Button */}
        <div className="add-widget-button" onClick={openModal}>
          + Add Widget
        </div>
      </div>

      {/* Modal for adding a new widget */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Widget</h3>
            <div className="form-group">
              <label>Title</label>
              <input 
                type="text" 
                name="title" 
                value={newWidget.title} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea 
                name="content" 
                value={newWidget.content} 
                onChange={handleChange} 
              ></textarea>
            </div>
            <button onClick={addWidget}>Add Widget</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
