import React from "react";
import { Link } from "react-router-dom";
import "../static/css/Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const headerObjects = [
  {
    id: 1,
    name: "Home",
    icon: "bi bi-house-dash-fill",
    link: "/home",
  },
  {
    id: 2,
    name: "Services",
    icon: "bi bi-database-gear",
    link: "/services",
  },
  {
    id: 3,
    name: "About",
    icon: "bi bi-person-circle",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    icon: "bi bi-telephone-fill",
    link: "/contact",
  },
  {
    id: 5,
    name: "API USERS",
    icon: "bi bi-people",
    link: "http://127.0.0.1:8000/api/v1/users",
  },
];

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo"> React.js Essential Training </div>
        <ul className="nav-links">
          {headerObjects.map((item) => {
            const { id, name, icon, link } = item;
            return (
              <li key={id}>
                {link.startsWith("http") ? (
                  <a href={link}>
                    <i className={icon}>{name}</i>
                  </a>
                ) : (
                  <Link to={link}>
                    <i className={icon}>{name}</i>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;
