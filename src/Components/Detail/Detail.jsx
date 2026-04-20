import { useState, useEffect } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import PaisService from "../../paises.services.js";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  const { code } = useParams();
  const [pais, setPais] = useState(null);

  useEffect(() => {
    PaisService.getPaisCode(code).then((data) => {
      console.log("data:", data);
      setPais(data[0]);
    });
  }, [code]);
  if (!pais) return <p>Carregando...</p>;

  const languages = Object.values(pais.languages).join(", ");
  const currency = Object.values(pais.currencies)[0];

  return (
    <div className="detail-container">
      <button className="button-exit" onClick={() => navigate("/")}>
        Voltar
      </button>
      <div className="detail-identity">
        <div className="detail-flag">
          <img
            src={pais.flags?.svg || pais.flags?.png}
            alt={pais.translations?.por?.common}
            className="pais-image"
          />
        </div>
        <h2>{pais.translations?.por?.official}</h2>
        <h4>{pais.translations?.por?.common}</h4>
      </div>
      <div>
        <div className="pais-detail">
          <div>
            <p>Capital:</p>
            {pais.capital}
          </div>
          <div>
            <p>Continente:</p>
            {pais.continents?.[0]}
          </div>
          <div>
            <p>Subregião:</p>
            {pais.subregion}
          </div>
          <div>
            <p>Área:</p>
            {pais.area} km²
          </div>
        </div>
        <div className="pais-detail">
          <div>
            <p>População:</p>
            {Intl.NumberFormat("pt-BR").format(pais.population)}
          </div>
          <div>
            <p>Linguagens:</p>
            {languages}
          </div>
          <div>
            <p>Moeda:</p>
            {currency?.name}({currency?.symbol})
          </div>
          <div>
            <p>Código:</p>
            {code}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
