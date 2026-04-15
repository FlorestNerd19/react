import paisCard from "../Card/PaisCard";
import "./PokemonList.css";
function PaisList({ paisList }) {
  return (
    <>
      <div className="pais-grid">
        {paisList.map((p) => (
          <paisCard key={p.id} pais={p} />
        ))}
      </div>
    </>
  );
}

export default PaisList;
