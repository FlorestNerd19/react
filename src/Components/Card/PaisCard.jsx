import "./paisCard.css";

function paisCard({ pais }) {
  const Populacao = new Intl.NumberFormat("pt-BR").format(country.population);

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
        <div className="pais-card-card-header">
          <span className="pais-id">#{pais.id}</span>
        </div>
        <img
          src={pais.sprites.other["official-artwork"].front_default}
          alt={pais.name}
          className="pais-image"
        />
        <h3 className="pais-name">{pais.name}</h3>
        <div className="pais-types-container">
          {pais.types.map((t) => (
            <span key={t.type.name} className={`type-badge ${t.type.name}`}>
              {t.type.name}{" "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default paisCard;
