import React from "react";
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={require('./sea_cusine_logo.png')}/>
            </div>
            <ul className="nav-items">
                <li> Home </li>
                <li> About Us </li>
                <li> Contact Us </li>
                <li> Cart </li>
            </ul>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restraunt-container">
                <RestrauntCard resname="Meghana" cusine="Biryani, Roti" rating="4.4" />
                <RestrauntCard resname="KFC" cusine="Burger, Chicken" rating="4.3" />
            </div>
        </div>
    )
}

const RestrauntCard = ({resname, cusine, rating}) => {
    return (
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xgj2cn4y2y8mtxisaplp" alt="" />
            <h5>{resname}</h5>
            <h5>{cusine}</h5>
            <h5>{rating}</h5>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout></AppLayout>)