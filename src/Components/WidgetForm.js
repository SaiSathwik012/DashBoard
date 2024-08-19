import React, { useState } from 'react';
import './WidgetForm.css'; // Optional: create this file for styling the form

function WidgetForm({ onAddWidget }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddWidget({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="widget-form">
      <h3>Add New Widget</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Widget Name:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter widget name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Widget Text:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter widget text"
          />
        </div>
        <button type="submit">Add Widget</button>
      </form>
    </div>
  );
}

export default WidgetForm;
