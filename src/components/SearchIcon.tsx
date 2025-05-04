import "../styles/SearchIcon.css";
import searchIcon from "../assets/search-icon.svg";

export default function SearchIcon() {
  return (
    <div className="search-icon-container">
      <img />
      <img src={searchIcon} alt="search" />
    </div>
  );
}
