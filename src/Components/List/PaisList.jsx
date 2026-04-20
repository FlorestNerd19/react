import { useState } from "react";
import PaisCard from "../Card/PaisCard.jsx";
import "./PaisList.css";

function PaisList({ paisList }) {
  const [search, setSearch] = useState("");

  if (!Array.isArray(paisList) || paisList.length === 0) {
    return <p>Carregando países...</p>;
  }

  const filtered = search
    ? paisList.filter(
        (c) =>
          c.name.common.toLowerCase().includes(search.toLowerCase()) ||
          c.cca3.toLowerCase().includes(search.toLowerCase()),
      )
    : paisList;

  return (
    <>
      <input
        type="text"
        placeholder="Buscar por nome ou código (ex: BRA)..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="pais-grid">
        {filtered.map((p) => (
          <PaisCard key={p.cca3} pais={p} />
        ))}
      </div>
    </>
  );
}

export default PaisList;
