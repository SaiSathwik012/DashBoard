import React, { useState } from "react";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";
import "./App.css";

function App() {
  // Initialize widgets for both sections
  const [widgetsSection1, setWidgetsSection1] = useState([
    { title: "Widget 1", content: "This is the content of Widget 1" },
    { title: "Widget 2", content: "This is the content of Widget 2" },
  ]);

  const [widgetsSection2, setWidgetsSection2] = useState([
    { title: "Widget 3", content: "This is the content of Widget 3" },
    { title: "Widget 4", content: "This is the content of Widget 4" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWidgetTitle, setNewWidgetTitle] = useState("");
  const [newWidgetContent, setNewWidgetContent] = useState("");
  const [currentSection, setCurrentSection] = useState(null); // To determine which section to add the widget to
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  // Add a new widget to the selected section
  const addWidget = () => {
    if (currentSection === 1) {
      setWidgetsSection1([...widgetsSection1, { title: newWidgetTitle, content: newWidgetContent }]);
    } else if (currentSection === 2) {
      setWidgetsSection2([...widgetsSection2, { title: newWidgetTitle, content: newWidgetContent }]);
    }
    setIsModalOpen(false);
    setNewWidgetTitle("");
    setNewWidgetContent("");
  };

  // Reset widgets to their default state
  const resetWidgets = () => {
    setWidgetsSection1([
      { title: "Widget 1", content: "This is the content of Widget 1" },
      { title: "Widget 2", content: "This is the content of Widget 2" },
    ]);
    setWidgetsSection2([
      { title: "Widget 3", content: "This is the content of Widget 3" },
      { title: "Widget 4", content: "This is the content of Widget 4" },
    ]);
  };

  // Remove a widget from the selected section
  const removeWidget = (section, index) => {
    if (section === 1) {
      setWidgetsSection1(widgetsSection1.filter((_, i) => i !== index));
    } else if (section === 2) {
      setWidgetsSection2(widgetsSection2.filter((_, i) => i !== index));
    }
  };

  // Function to filter widgets based on the search query
  const filterWidgets = (widgets) =>
    widgets.filter(
      (widget) =>
        widget.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        widget.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="navbar-left">
          <h3>CNAPP Dashboard</h3>
        </div>
        <div className="navbar-right">
          {/* Add Widget Button */}
          <div
            onClick={() => {
              setIsModalOpen(true);
              setCurrentSection(1);
            }}
          >
            <span className="span-section">+ Add Widget</span>
          </div>
          {/* Reset Widgets Button */}
          <button className="reset-button" onClick={resetWidgets}>
            <PiArrowsCounterClockwiseFill />
          </button>
          {/* Day Range Selector */}
          <div className="day-range-selector">
            <select>
              <option value="2">Last 2 Days</option>
              <option value="1">Last 1 Day</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>
      </nav>

      {/* Search Input Field */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Widgets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Section 1 */}
      <h3>CSPM Executive Dashboard</h3>
      <div className="dashboard">
        {filterWidgets(widgetsSection1).length > 0 ? (
          filterWidgets(widgetsSection1).map((widget, index) => (
            <div key={index} className="widget">
              <h2>{widget.title}</h2>
              <p>{widget.content}</p>
              <button onClick={() => removeWidget(1, index)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No widgets found</p>
        )}
        <div className="one-section">
          <div
            className="add-widget-button"
            onClick={() => {
              setIsModalOpen(true);
              setCurrentSection(1);
            }}
          >
            <span className="span-section">+ Add Widget</span>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <h3>CWPP Dashboard</h3>
      <div className="dashboard">
        {filterWidgets(widgetsSection2).length > 0 ? (
          filterWidgets(widgetsSection2).map((widget, index) => (
            <div key={index} className="widget">
              <h2>{widget.title}</h2>
              <p>{widget.content}</p>
              <button onClick={() => removeWidget(2, index)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No widgets found</p>
        )}
        <div className="one-section">
          <div
            className="add-widget-button"
            onClick={() => {
              setIsModalOpen(true);
              setCurrentSection(2);
            }}
          >
            <span className="span-section">+ Add Widget</span>
          </div>
        </div>
      </div>

      {/* Modal for adding new widget */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Widget</h3>
            <div className="form-group">
              <label>Widget Title</label>
              <input
                type="text"
                value={newWidgetTitle}
                onChange={(e) => setNewWidgetTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Widget Content</label>
              <textarea
                value={newWidgetContent}
                onChange={(e) => setNewWidgetContent(e.target.value)}
              ></textarea>
            </div>
            <button onClick={addWidget}>Add Widget</button>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
