import React from "react";
import "../static/css/Header.css";
// import bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";
// import { NavItem } from "react-bootstrap";

const headerObjects = [
  {
    id: 1,
    name: "Home",
    icon: "bi bi-house-dash-fill",
    link: "#home",
  },
  {
    id: 2,
    name: "Services",
    icon: "bi bi-database-gear",
    link: "#services",
  },
  {
    id: 3,
    name: "About",
    icon: "bi bi-person-circle",
    link: "#about",
  },
  {
    id: 4,
    name: "Contact",
    icon: "bi bi-telephone-fill",
    link: "#contact",
  },

  {
    id: 5,
    name: "API USERS",
    icon: "bi bi-people",
    link: "http://127.0.0.1:8000/api/v1/users",
  },
];

const testMap = headerObjects.map((item, index) => {
  const { id, name, icon, link } = item;
  return (
    console.log(
      `id: ${id}, name: ${name}, icon: ${icon}, link: ${link}, index: ${index}`
    )
  );
})

console.log(testMap);

function Header() {
  return (
    <div className="navbar">
      <div className="logo"> React.js Essential Training </div>
      <ul className="nav-links">
        {headerObjects.map((item) => {
          const { id, name, icon, link } = item;
          return (
            <li key={id}>
              <a href={link}>
                {" "}
                <i className={icon}> {name} </i>{" "}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// function Header() {
//   return (
//     <div className='navbar'>
//       <div className='logo'> NaturesWonder.com </div>
//       <ul className='nav-links'>
//         <li><a href='#home'> <i class="bi bi-house-dash-fill"></i> </a></li>
//         <li><a href='#services'><i class="bi bi-database-gear"></i></a></li>
//         <li><a href='#about'><i class="bi bi-person-circle"></i></a></li>
//         <li><a href='#contact'><i class="bi bi-telephone-fill"></i></a></li>
//       </ul>
//     </div>
//   );
// };

export default Header;
