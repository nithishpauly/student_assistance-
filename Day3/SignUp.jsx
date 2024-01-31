// src/components/Auth.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import StaffLogin from './StaffLogin';
import StaffSignup from './StaffSignup';

const SignUp = () => {
  return (
    

    <div>
      

      {/* Navigation Links */}
      <nav>
        { <ul>
          <button><Link to="./UserSignup">User Signup</Link></button>
          
        </ul> }
      </nav>

     
      <Routes>
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminSignup" element={<AdminSignup />} />
        <Route path="/StaffLogin" element={<StaffLogin />} />
        <Route path="/StaffSignup" element={<StaffSignup />} />
      </Routes>
    </div>
    
  );
};

export default SignUp;
