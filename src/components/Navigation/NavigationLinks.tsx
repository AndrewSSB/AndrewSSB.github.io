import { NavLink, useLocation } from "react-router-dom";
import "../../styles/NavigationLinks.css";

export default function NavigationLinks() {
  const location = useLocation();

  const getSelectedKey = (pathname: string) => {
    if (pathname === "/") return "home";
    if (pathname === "/find-more") return "find";
    if (pathname.startsWith("/view")) return "cook";
    return "";
  };

  const selected = getSelectedKey(location.pathname);

  return (
    <div className="nav-links-wrapper">
      <div className="link-group">
        <NavLink to="/" className="link-decorator">
          <p className={`link-text ${selected === "home" ? "selected" : ""}`}>
            HOME
          </p>
        </NavLink>
        <NavLink to="/find-more" className="link-decorator">
          <p className={`link-text ${selected === "find" ? "selected" : ""}`}>
            FIND MORE
          </p>
        </NavLink>
        <NavLink to="/view-all" className="link-decorator">
          <p className={`link-text ${selected === "cook" ? "selected" : ""}`}>
            COOK BOOK
          </p>
        </NavLink>

        <div className={`underline ${selected}`}></div>
      </div>
    </div>
  );
}
