// import Link from "next/link";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";

const Nav = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-primary navbar-dark ">
      <div className="container">
        <div className="navbar-brand d-flex text-uppercase">
          <span>Mabhoyi</span>
        </div>
        <button
          className="navbar-toggler"
          // type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                to="home"
                offset={-105}
                className="nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link"
                offset={-220}
                className="nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link to="getinvolve" className="nav-link">
                get involved
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
