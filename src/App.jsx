import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { Sobre } from "./pages/Sobre";
import { NoticiasConteudos } from "./pages/NoticiasConteudos";
import { PrimeirosCuidados } from "./pages/PrimeirosCuidados";
import { ImportanciaBrincadeiras } from "./pages/ImportanciaBrincadeiras";
import { Emocoes } from "./pages/Emocoes";
import { RotinaInfantil } from "./pages/RotinaInfantil";
import { Estimulo } from "./pages/Estimulo";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/noticias-conteudos" element={<NoticiasConteudos />} />
        <Route path="/primeiros-cuidados" element={<PrimeirosCuidados />} />
        <Route path="/importancia-brincadeiras" element={<ImportanciaBrincadeiras />} />
        <Route path="/emocoes" element={<Emocoes />} />
        <Route path="/rotina-infantil" element={<RotinaInfantil />} />
        <Route path="/estimulo" element={<Estimulo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
