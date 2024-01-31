// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  const [isExpanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isExpanded ? '=' : '='}
      </div>
      {isExpanded && (
        <>
         
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;

