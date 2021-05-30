import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="section">
      <img
        src="Tianao.jpg"
        style={{ width: 120, height: 170, borderRadius: 50 }}
      ></img>
      <a
        class="nav-link link-secondary"
        style={{ paddingTop: 20 }}
        href="Portfolio/about"
      >
        About Me
      </a>
      <a class="nav-link link-secondary" href="Portfolio/education">
        Education
      </a>
      <a class="nav-link link-secondary" href="Portfolio/experience">
        Project Experience
      </a>
      <a class="nav-link link-secondary" href="Portfolio/work">
        Work Experience
      </a>
      <a class="nav-link link-secondary" href="Portfolio/skills">
        Skills
      </a>
      <a class="nav-link link-secondary" href="Portfolio/award">
        Awards && Volunteer
      </a>
    </div>
  );
};

export default NavBar;
