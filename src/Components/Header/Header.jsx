import "./Header.css";
import logo from "/Icon.png";
function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="WikiPaises Logo" />
      </div>
      <div id="logo">WikiPaises</div>
      <div class="continente">América</div>
      <div class="continente">Africa</div>
      <div class="continente">Asia</div>
      <div class="continente">Europa</div>
      <div class="continente">Oceania</div>
    </header>
  );
}

export default Header;
