import React, { useState } from 'react';
import './AddWidgetModal.css'; // Import the CSS file for styling

function AddWidgetModal({ isOpen, onClose, onAddWidget }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddWidget({ title, content });
      setTitle('');
      setContent('');
      onClose(); // Close the modal after adding widget
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-header">
        <div className="modal-logo">
          <span className="logo-circle">
            {/* SVG Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="419.116" viewBox="0 0 512 419.116">
              <defs>
                <clipPath id="clip-folder-new">
                  <rect width="512" height="419.116" />
                </clipPath>
              </defs>
              <g id="folder-new" clipPath="url(#clip-folder-new)">
                <path id="Union_1" data-name="Union 1" d="M16.991,419.116A16.989,16.989,0,0,1,0,402.125V16.991A16.989,16.989,0,0,1,16.991,0H146.124a17,17,0,0,1,10.342,3.513L227.217,57.77H437.805A16.989,16.989,0,0,1,454.8,74.761v53.244h40.213A16.992,16.992,0,0,1,511.6,148.657L454.966,405.222a17,17,0,0,1-16.6,13.332H410.053v.562ZM63.06,384.573H424.722L473.86,161.988H112.2Z" fill="var(--c-action-primary)" />
              </g>
            </svg>
          </span>
        </div>
        <button className="btn-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="var(--c-text-secondary)"/></svg>
        </button>
      </div>
      <div className="modal-body">
        <h2 className="modal-title">Add New Widget</h2>
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
          <button type="submit" className="btn-primary">Add Widget</button>
        </form>
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AddWidgetModal;
