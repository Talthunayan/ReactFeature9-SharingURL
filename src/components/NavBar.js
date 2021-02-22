// Styling
import { ThemeButton } from "../styles";
import cookieLogo from "./images/cookieLogo.png"
import {Link} from "react-router-dom"
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Link to="/">
      <img className="navbar-brand" src={cookieLogo} height="100px" width="100px" />
      </Link>
      <div className="navbar-nav ml-auto">
        <a className="nav-item" style={{ padding: "0.25em 1em" }} href="/products">
          Products
        </a>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
