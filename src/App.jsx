import { useState, useEffect } from "react";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import PaisService from "./paises.services.js";
import PaisList from "./Components/List/PaisList.jsx";
function App() {
  const [paisList, setPaisList] = useState([]);

  useEffect(() => {
    PaisService.getPaises().then((data) => {
      console.log(data); // ← adicione isso
      setPaisList(data);
    });
  }, []);

  return (
    <>
      <Header />

      <PaisList paisList={paisList} />
      <Footer />
    </>
  );
}

export default App;
