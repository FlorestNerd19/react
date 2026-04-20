import { useState } from "react";
import PaisCard from "../Card/PaisCard.jsx";
import "./PaisList.css";

const POR_PAGINA = 20;

function PaisList({ paisList }) {
  const [search, setSearch] = useState("");
  const [pagina, setPagina] = useState(1);

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

  const totalPaginas = Math.ceil(filtered.length / POR_PAGINA);
  const inicio = (pagina - 1) * POR_PAGINA;
  const paginaAtual = filtered.slice(inicio, inicio + POR_PAGINA);

  function handleSearch(e) {
    setSearch(e.target.value);
    setPagina(1);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar por nome ou código (ex: BRA)..."
        value={search}
        onChange={handleSearch}
      />

      <div className="pais-grid">
        {paginaAtual.map((p) => (
          <PaisCard key={p.cca3} pais={p} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPagina((p) => p - 1)} disabled={pagina === 1}>
          ← Anterior
        </button>

        <span>
          Page {pagina} of {totalPaginas}
        </span>

        <button
          onClick={() => setPagina((p) => p + 1)}
          disabled={pagina === totalPaginas}
        >
          Próximo →
        </button>
      </div>
    </>
  );
}

export default PaisList;
