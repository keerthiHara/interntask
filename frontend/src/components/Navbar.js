import React from "react";
import "../assets/style/navbar.css"
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ userRole, setUserRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserRole(null); // Reset user role to null
    navigate("/"); // Redirect to login page
  };

  return (
    <>
    
    <div className="navcontainer">  
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav d-flex justify-content-start w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>

          {userRole && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-link nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!userRole && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
