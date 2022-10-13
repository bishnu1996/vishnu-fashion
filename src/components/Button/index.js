import React from "react";
import "./style.css";
const Button = (props) => {
  return <button className="button-main"> {props.children}</button>;
};

export default Button;
