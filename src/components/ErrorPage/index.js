import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import "./style.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>404</h1>
        <h2>UH! OH You are lost</h2>
        <p>The page you are looking does not exists</p>
      </div>
      <NavLink to="/">
        <Button>Go Back to Home</Button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
