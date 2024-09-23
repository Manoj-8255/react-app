
import { useState } from 'react';
export const Header = () => {
    const [btnName,setBtnName]= useState(['Login'])
    return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../../sea_cusine_logo.png")} />
      </div>
      <ul className="nav-items">
        <li> Home </li>
        <li> About Us </li>
        <li> Contact Us </li>
        <li> Cart </li>
        <li>
          <button className="login" onClick={() => setBtnName(btnName === 'Login' ? 'Logout': 'Login' )}> {btnName}</button>
        </li>
      </ul>
    </div>
  );
};
