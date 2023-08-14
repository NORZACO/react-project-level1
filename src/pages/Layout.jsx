// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../static/css/Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const LayoutObjects = [
  {
    id: 1,
    name: "Home",
    icon: "bi bi-house-dash-fill",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    icon: "bi bi-database-gear",
    link: "/services",
  },
  {
    id: 3,
    name: "Album",
    icon: "bi bi-journal-album",
    link: "/albums",
  },
  {
    id: 4,
    name: "Contact",
    icon: "bi bi-telephone-fill",
    link: "/contact",
  },
  {
    id: 5,
    name: "API users",
    icon: "bi bi-people",
    link: "http://127.0.0.1:8000/api/v1/utility/allusers",
  },
  {
    id: 6,
    name: "API Blogs",
    icon: "bi bi-journal-bookmark-fill",
    link: "/album",
  },
  {
    id : '7',
    name:'Login',
    icon:"bi bi-box-arrow-in-right" ,
    link:"/login"
  },

  {
    id : '8',
    name:'Register',
    icon:"bi bi-person-plus-fill" ,
    link:"/registration"
  },
];

function Layout() {
  return (
    <>
    {/* <br /> */}
      <div className="navbar">
        <div className="logo"> React.js Essential Training </div>
        <ul className="nav-links">
          {LayoutObjects.map((item) => {
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
      <Outlet />
    </>
  );
}

export default Layout;
