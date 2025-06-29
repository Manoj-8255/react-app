import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
export const Header = () => {
  const [btnName, setBtnName] = useState(["Login"]);
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../../sea_cusine_logo.png")} />
      </div>
      <ul className="nav-items">
        <li>
          Internet Status : {onlineStatus ? '🟢': '🔴'}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us </Link>
        </li>
        <li>
          <Link to="/grocery">Grocery </Link>
        </li>
        <li> Cart </li>
        <li>
          <button
            className="login"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};
