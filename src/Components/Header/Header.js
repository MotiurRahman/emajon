import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.email ? (
          <button className="btnLogout" onClick={signOutUser}>
            Log Out
          </button>
        ) : (
          <>
            <Link to="/signup">Sign UP</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        <p className="wlcome">welcome {user?.email}</p>
      </div>
    </nav>
  );
};

export default Header;
