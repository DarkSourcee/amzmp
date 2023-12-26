import React from "react";
import { Notices } from "../components/Notices";

import {Buttons} from "../components/Buttons";

import bebe1 from "../assets/img/bebe1.jpg";
import bebe2 from "../assets/img/bebe2.jpg";
import bebe3 from "../assets/img/bebe3.jpg";
import bebe4 from "../assets/img/bebe4.jpg";

import "../styles/Main.css";

import "../App.css";

export const Main = () => {
  return (
    <>
      <Notices />
      <div className="perguntas-frequentes">
        <img src={bebe1} alt="" />
        <img src={bebe2} alt="" />
        <img src={bebe3} alt="" />
        <img src={bebe4} alt="" />
        <p>Perguntas Frequentes</p>
        <h4>
          O IDEAL É LEVAR O SEU BEBÊ AO PEDIATRA LOGO NA PRIMEIRA SEMANA DE
          VIDA!
        </h4>
        <p>Vem ver outras respostas que podem te interessar</p>
        <Buttons tipo="btn btn-primary" texto="Saiba Mais" />
      </div>
    </>
  );
};
