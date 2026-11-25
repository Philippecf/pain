import logo from "../assets/logo-pain-hexagone.jpg";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo-pain-hexagone" />
      </a>
      <h1>Co.Paing</h1>
    </header>
  );
}

export default Header;
