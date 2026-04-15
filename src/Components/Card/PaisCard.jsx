import "./paisCard.css";

function paisCard({ pais }) {
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
