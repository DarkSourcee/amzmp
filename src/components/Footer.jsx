import React from "react";

import {Buttons} from "./Buttons";

import image1 from "../assets/img/Grupo de máscara 9.png";
import image2 from "../assets/img/imagem-empresa.png";

import '../styles/Footer.css';

export function Footer() {
  return (
    <footer className="rodape">
      <div className="img">
        <img src={image1} alt="" />
      </div>
      <div className="grid">
        <div className="home">
          <p>Home</p>
          <p>Sobre</p>
          <p>O Consultório</p>
        </div>

        <div className="perguntas-freq">
          <p>Perguntas Frequentes</p>
          <p>Notícias</p>
          <p>Conteúdo Contato</p>
        </div>

        <div className="imagem">
          <img src={image2} alt="" />
        </div>

        <div className="consultorio">
          <p>Consultório particular</p>
          <p>
            Av. Senador Vergueiro,2123 - São Bernardo do Campo - 16º. Andar -
            Sala 1605 | CEP 09601-000 | Tel: 11 91057.8890
          </p>
          <p>Veja como chegar</p>
          <Buttons tipo="btn btn-primary" texto="Waze" icone="fa-brands fa-waze"/>
          <Buttons tipo="btn btn-success" texto="Google Maps" icone="fa-solid fa-map-location-dot"/>
        </div>
      </div>
    </footer>
  );
}
