import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PaisService from "../../paises.services.js";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  const { code } = useParams();
  const [pais, setPais] = useState(null);

  useEffect(() => {
    PaisService.getPaisCode(code).then((data) => {
      console.log("code:", code);
      console.log("data:", data);
      setPais(data[0]);
    });
  }, [code]);

  if (!pais) return <p>Carregando...</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Voltar</button>,,,,
      <h1>{pais.name?.common}</h1>
      <p>Código do país: {code}</p>
    </div>
  );
}

export default Detail;
