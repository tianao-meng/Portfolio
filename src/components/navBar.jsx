import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="section">
      <img
        src="Tianao.jpg"
        style={{ width: 120, height: 170, borderRadius: 50 }}
      ></img>
      <Link
        class="nav-link link-secondary"
        style={{ paddingTop: 20 }}
        to="/about"
      >
        About Me
      </Link>
      <Link class="nav-link link-secondary" to="/education">
        Education
      </Link>
      <Link class="nav-link link-secondary" to="/experience">
        Project Experience
      </Link>
      <Link class="nav-link link-secondary" to="/work">
        Work Experience
      </Link>
      <Link class="nav-link link-secondary" to="/skills">
        Skills
      </Link>
      <Link class="nav-link link-secondary" to="/award">
        Awards && Volunteer
      </Link>
    </div>
  );
};

export default NavBar;
