
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import BookDetail from "./pages/BookDetail";
// import Filterbook from "./pages/Filterbook";
// import Login from "./pages/Login";
// import AddBook from "./pages/AddBook"; 

// const App = () => {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded = JSON.parse(atob(token.split(".")[1]));
//       setUserRole(decoded.role);
//     }
//   }, []);
//   return (
//     <Router>
//       <Navbar userRole={userRole}/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/book/:id" element={<BookDetail />} />
//         <Route path="/search" element={<Filterbook/>}/>
//         <Route path="/login" element={<Login setUserRole={setUserRole} />} />
//         <Route path="/add-book" element={userRole === "admin" ? <AddBook /> : <p>Access denied</p>} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Filterbook from "./pages/Filterbook";
import Login from "./pages/Login";
import AddBook from "./pages/AddBook";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setUserRole(decoded.role);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar userRole={userRole} setUserRole={setUserRole} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home userRole={userRole} /> : <Navigate to="/login" />}
        />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/search" element={<Filterbook />} />
        
        {/* Admin protected route */}
        <Route
          path="/add-book"
          element={userRole === "admin" ? <AddBook /> : <p>Access denied</p>}
        />
        
        {/* Profile route */}
        <Route
          path="/profile"
          element={ <Profile />}
        />
        
        {/* Fallback route for non-matched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
