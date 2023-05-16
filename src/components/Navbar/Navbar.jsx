import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuObject = [
    { path: "/", text: "Home" },
    { path: "/login", text: "Login" },
    { path: "/register", text: "Register" },
  ];
  return (
    <nav className="navbar-componene">
      <div className="logo-area">
        <Link to={"/"}>Logo</Link>
      </div>
      <div className="menu-area">
        <ul>
          {menuObject.map((singleItem, index) => (
            <li key={index}>
              <NavLink to={singleItem.path}>{singleItem.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
