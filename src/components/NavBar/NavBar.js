import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-xxl d-flex">
      <div id="navbar" className="row w-100">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              CothingCo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <section
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </section>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/category/men's%20clothing"
                      >
                        Men's Clothing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/category/women's%20clothing"
                      >
                        Women's Clothing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/category/jewelery">
                        Jewelery
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/category/electronics"
                      >
                        Electronics
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <CartWidget className="justify-content-end flex-shrink-1" />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
