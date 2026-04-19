import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import PaisService from "./paises.services.js";
import PaisList from "./Components/List/PaisList.jsx";
import Detail from "./Components/Detail/Detail.jsx";

function App() {
  const [paisList, setPaisList] = useState([]);

  useEffect(() => {
    PaisService.getPaises().then((data) => {
      setPaisList(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PaisList paisList={paisList} />} />
        <Route path="/country/:code" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
