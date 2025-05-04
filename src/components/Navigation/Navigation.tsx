import "../../styles/Navigation.css";
import IconButton from "../IconButton";
import PrimaryButton from "../PrimaryButton";
import SearchIcon from "../SearchIcon";
import NavigationLinks from "./NavigationLinks";

export default function Navigation() {
  return (
    <div className="navbar">
      <IconButton text="ReciBook" />
      <NavigationLinks />
      <div className="navbar-right-content">
        <SearchIcon />
        <PrimaryButton text="Sign Up" />
      </div>
    </div>
  );
}
