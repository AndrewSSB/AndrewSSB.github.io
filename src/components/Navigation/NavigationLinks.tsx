import { NavLink, useLocation } from "react-router-dom";
import "../../styles/NavigationLinks.css";
import { ConfigProvider, Dropdown, MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="Documentation Redirect"
        href="https://unibucro0-my.sharepoint.com/:w:/g/personal/adriana_maxim_s_unibuc_ro/Ef5DW_3-EsBCj9HylzkHJ3QBkD9sx1a4hOx8WQZRuOoGEw?e=NaG9cN"
      >
        <p className="link-text">Document</p>
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="Figma Redirect"
        href="https://www.figma.com/design/fCh5Mja909F1HfnQdP7XJ5/Vladyc?node-id=0-1&t=HIJlqqGMXHUYJzeu-1"
      >
        <p className="link-text">Figma</p>
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="Google Docs Redirect"
        href="https://docs.google.com/presentation/d/1KgtefrCvGEk8X4HoUcQmN8sD8BrOdJVODRtdKW5nTqA/edit?usp=sharing"
      >
        <p className="link-text">Presentation (Docs)</p>
      </a>
    ),
  },
];

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
        <ConfigProvider
          theme={{
            token: {
              colorBgElevated: "rgba(240, 235, 225, 1)",
            },
            components: {},
          }}
        >
          <Dropdown menu={{ items }} arrow placement="bottom">
            <p className="link-text">References</p>
          </Dropdown>
        </ConfigProvider>
        <div className={`underline ${selected}`}></div>
      </div>
    </div>
  );
}
