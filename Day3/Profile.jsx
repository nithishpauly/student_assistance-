import React, { useState } from 'react';
import "./profile.css";

const Profile = () => {
  // State to manage whether the user is in edit mode or not
  const [isEditing, setIsEditing] = useState(false);

  // Placeholder user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'A passionate individual who loves coding!',
  });

  // Handler to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handler to update user data
  const handleUpdate = () => {
    // Add your logic here to update user data (e.g., make an API call)
    // For simplicity, we're just toggling back to non-edit mode here
    toggleEditMode();
  };

  // Handler to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      {isEditing ? (
        // Render editable fields when in edit mode
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <br />
          <label>Bio:</label>
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
          ></textarea>
          <br />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        // Render non-editable fields when not in edit mode
        <div>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Bio:</strong> {userData.bio}
          </p>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile
