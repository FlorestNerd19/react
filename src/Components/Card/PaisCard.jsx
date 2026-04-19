import "./PaisCard.css";
import { useNavigate } from "react-router-dom";

function PaisCard({ pais }) {
  const navigate = useNavigate();
  const Populacao = new Intl.NumberFormat("pt-BR").format(pais.population);

  const corContinente = {
    Africa: "#e97b21",
    Americas: "rgb(34, 151, 11)",
    Asia: "#edf10f",
    Europe: "#0fa0e4",
    Oceania: "#f54040",
  };

  return (
    <>
      <div
        className="pais-card"
        onClick={() => navigate(`/country/${pais.cca3}`)}
      >
        <div className="pais-flag">
          <img
            src={pais.flags?.svg || pais.flags?.png}
            alt={pais.name?.common}
            className="pais-image"
          />
        </div>
        <div className="pais-card-header">
          <p className="pais-name">{pais.name?.common}</p>

          <span
            className="pais-id"
            style={{ backgroundColor: corContinente[pais.region] || "#aaa" }}
          >
            {pais.region}
          </span>
        </div>
        <div>
          <img src="gps.png" className="pais-icons" />
          {pais.capital}
        </div>
        <div>
          <img src="populacao.png" className="pais-icons" />
          {Populacao}
        </div>
      </div>
    </>
  );
}

export default PaisCard;
