import React from 'react';
import './Widget'; // Create a CSS file for widget styling if needed

function Widget({ title, content }) {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Widget;
