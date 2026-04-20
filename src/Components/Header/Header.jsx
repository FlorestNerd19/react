import "./Header.css";
import logo from "/Icon.png";

function Header({ onRegionChange }) {
  return (
    <header>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="WikiPaises Logo" />
          <div className="a" onClick={() => onRegionChange("")}>
            <a id="logo" href="/">
              WikiPaises
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="a" onClick={() => onRegionChange("Americas")}>
            <a>América</a>
          </div>
          <div className="a" onClick={() => onRegionChange("Africa")}>
            <a>Africa</a>
          </div>
          <div className="a" onClick={() => onRegionChange("Asia")}>
            <a>Asia</a>
          </div>
          <div className="a" onClick={() => onRegionChange("Europe")}>
            <a>Europa</a>
          </div>
          <div className="a" onClick={() => onRegionChange("Oceania")}>
            <a>Oceania</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
