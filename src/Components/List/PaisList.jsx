import PaisCard from "../Card/PaisCard.jsx";
import "./PaisList.css";

function PaisList({ paisList }) {
  return (
    <>
      <div className="pais-grid">
        {paisList.map((p) => (
          <PaisCard key={p.cca3} pais={p} />
        ))}
      </div>
    </>
  );
}

export default PaisList;
