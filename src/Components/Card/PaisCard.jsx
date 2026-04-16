import "./PaisCard.css";

function PaisCard({ pais }) {
  const Populacao = new Intl.NumberFormat("pt-BR").format(pais.population);

  const corContinente = {
    Africa: "#e921e9",
    Americas: "#48cc2ebb",
    Asia: "#f1a20f",
    Europa: "#eb1a1a",
    Oceania: "#2874e6",
  };

  return (
    <>
      <div className="pais-card">
        <div className="pais-card-header">
          <span
            className="pais-id"
            style={{ backgroundColor: corContinente[pais.region] || "#aaa" }}
          >
            {pais.region}
          </span>
        </div>
        <img
          src={pais.flags?.svg || pais.flags?.png}
          alt={pais.name?.common}
          className="pais-image"
        />
        <h3 className="pais-name">{pais.name?.common}</h3>
      </div>
    </>
  );
}

export default PaisCard;
