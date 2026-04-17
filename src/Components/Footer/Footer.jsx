import "./Footer.css";
import logo from "/Icon.png";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="criador">
          <h5>WikiPaises</h5>
          <p>
            {" "}
            © 2026 Wikipaises. Curadoria digital. Todos os direitos
            reservados.{" "}
          </p>
        </div>
        <p>Sobre</p>
        <p>Mais</p>
      </div>
    </footer>
  );
}

export default Footer;
