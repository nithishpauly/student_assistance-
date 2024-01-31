import React from 'react';
import { Link } from 'react-router-dom';
import UCourseCard from './UCourseCard';
import './UCourses.css';
import smc from './smc.jpg';
import cc from './cc.jpg';
import ai from './ai.jpeg';

const UCourses = () => {
  const coursesData = [
    { title: 'Smart Contract Development', imageUrl: smc, description: '' },
    { title: 'Cloud Computing', imageUrl: cc, description: '' },
    { title: 'Artificial Intelligence', imageUrl: ai, description: '' },
  ];

  return (
    <div className="courses-container">
      <Link to="/profile">
        <button className="profile-button">Go to Profile</button>
      </Link>
      {coursesData.map((course, index) => (
        <UCourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default UCourses;
