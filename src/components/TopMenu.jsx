import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-Learning
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                All  Courses
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                    DevOps
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                     BI and Visualization
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                 Data Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Programming&Frameworks
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      PG Programs
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                   Big Data
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/500">
                      500 Internal Server Error
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Popular Courcess
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Univeristy Program
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Master program
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
