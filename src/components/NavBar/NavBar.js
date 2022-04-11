import "./NavBar.css";
import NavBarItem from "../NavBarItem/NavBarItem";
import { useLanguage } from "../../hooks/useLanguage";
import { useSelector } from "react-redux";
import ChangeLang from "../ChangeLang/ChangeLang";

function NavBar() {
  const langstring = useSelector((state) => state.lang.lang);
  const { navBar } = useLanguage(langstring);
  return (
    <div id="navbox" className="transparent">
      <nav id="navbar">
        <ul>
          <NavBarItem href="#welcome-section" text={navBar[0]} />

          <NavBarItem href="#projects" text={navBar[1]} />

          <NavBarItem href="#contact" text={navBar[2]} />
        </ul>
      </nav>
      <ChangeLang />
    </div>
  );
}

export default NavBar;
