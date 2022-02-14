import React from "react";
import { Link } from "react-router-dom";

const CardLogin = (props) => {
  return (
    <div className={`card shadow-sm ${props.className}`}>
      <div className="card-body text-center">
        <h5 className="card-title">Create Your Resume</h5>
        <Link to="#" className="btn btn-primaryF">
         Create
        </Link>
      </div>
    </div>
  );
};

export default CardLogin;
