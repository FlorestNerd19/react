import "./Header.css";
import logo from "/Icon.png";
function Header() {
  return (
    <header>
      <div class="header">
        <img src={logo} alt="WikiPaises Logo" />
        <a id="logo">WikiPaises</a>{" "}
        <div class="header-right">
          <a>América</a>
          <a>Africa</a>
          <a>Asia</a>
          <a>Europa</a>
          <a>Oceania</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
