import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar-is-transparent p-3">
          <div className="navbar-brand is-size-5">
            <Link className="navbar-item has-text-white" to="/">
              Home
            </Link>
            <Link to="/characterList" className="navbar-item  has-text-white">
              Characters
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
