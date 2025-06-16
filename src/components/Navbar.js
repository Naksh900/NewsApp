// import PropTypes from "prop-types";
import React from "react";
import { Link , useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  // static propTypes = {};

  const myStyleNav = {
    color: "black",
    fontWeight: 'bold',
    backgroundColor: "#926e67",
    fontFamily: "sans-serif",
    border: "1px solid black"
  }


  const getLinkStyle = (path) => {
    return {
      color: location.pathname === path ? "white" : "#b2a19e", 
      fontWeight: location.pathname === path ? "bold" : "normal"
    };
  };


  return (
    <div >
      <nav className="navbar fixed-top navbar-expand-lg py-1" style={myStyleNav}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color:"#f8d5cf", fontWeight:"bold"}}>
            NewsGrid
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/general" style={getLinkStyle("/general")}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" style={getLinkStyle("/business")}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={getLinkStyle("/entertainment")}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={getLinkStyle("/health")}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={getLinkStyle("/science")}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={getLinkStyle("/sports")}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={getLinkStyle("/technology")}>
                  Technology
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li> */}
              {/* <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </Link>
                </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
