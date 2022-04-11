import "./NavBarItem.css";

function NavBar({ href = "?", text = "notfound" }) {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
}

export default NavBar;
