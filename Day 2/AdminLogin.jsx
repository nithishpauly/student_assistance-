// src/components/User/UserLogin.js
// import React, { useState } from 'react';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement login logic for user
//     console.log('Admin login:', { email, password });
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="button" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here (e.g., make an API request)
    console.log('User login:', { email, password });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Login</h2>
      <form style={styles.form}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginForm;

