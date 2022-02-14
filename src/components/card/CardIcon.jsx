import React from "react";
import { Link } from "react-router-dom";
const CardIcon = (props) => {
  return (
    <Link to={props.to} className="text-decoration-none">
      <div className="card text-center">
        <div   className={`card-header ${props.cssClass}`}>
          <h6 className="card-title text-capitalize">{props.title}</h6>
        </div>
        <div className="card-body">
          {props.children}
        
          <div className="card-text text-success">{props.text}</div>
          <small className="text-muted">{props.tips}</small>
          <div><a href="#">View More </a></div>
        </div>
      </div>
    </Link>
  );
};

export default CardIcon;
