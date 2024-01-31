// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Navbar from './components/Navbar';
// import Sidebar from './components/sidebar';
// import Admin from './pages/Admin';
// import './index.css';
// import Auth from './pages/auth';
// import SignUp from './pages/SignUp';


// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />

//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/Auth/*" element={<Auth />} />
//             <Route path="/SignUp/*" element={<SignUp />} />
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/Admin" element={<Admin />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Admin = lazy(() => import('./admin/Admin'));
const Auth = lazy(() => import('./pages/auth'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Courses = lazy(() => import('./pages/Courses'));
const Contact = lazy(() => import('./pages/Contact'));
const Header = lazy(() => import('./admin/Header'));
const A= lazy(() => import('./pages/Contact'));
const UCourses = lazy(() => import('./User/UCourses'));
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Auth/*" element={<Auth />} />
            <Route path="/SignUp/*" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Courses" element={<Courses/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Header" element={<Header/>}/>
            <Route path="/UCourses" element={<UCourses/>}/>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

