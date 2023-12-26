import React from "react";
import { Notices } from "../components/Notices";

import { Buttons } from "../components/Buttons";

import bebe1 from "../assets/img/bebe1.jpg";
import bebe2 from "../assets/img/bebe2.jpg";
import bebe3 from "../assets/img/bebe3.jpg";
import bebe4 from "../assets/img/bebe4.jpg";

import preNatal from "../assets/img/consulta-pre-natal.png";
import consultaPediatrica from "../assets/img/DSC_6864 copiar.png";
import nefrologiaPediatrica from "../assets/img/shutterstock_2207348935.png";
import sobreDoutora from "../assets/img/IMG_2434.png";

import "../styles/Main.css";

import "../App.css";

export const Main = () => {
  return (
    <>
      <section id="banner">

      </section>

      <section id="consultas">
        <div class="pre_natal">
          <img src={preNatal} alt="pré natal" />
          <h3>CONSULTA PRÉ-NATAL</h3>
          <p>Preparamos a família para uma nova fase da vida, permitindo desenvolvimento saudável do bebê, minimizando as preocupações e dando diversas orientações para o dia a dia.</p>
        </div>

        <div class="pediatra">
          <img src={consultaPediatrica} alt="CONSULTA PEDIÁTRICA" />
          <h3>CONSULTA PEDIÁTRICA</h3>
          <p>Acompanhamos o desenvolvimento do seu filho em todos os aspectos: físico, neurológico e comportamental. Tudo para formarmos um adulto com mais saúde e qualidade de vida.</p>
        </div>

        <div class="nef_pediatra">
          <img src={nefrologiaPediatrica} alt="NEFROLOGIA PEDIÁTRICA" />
          <h3>NEFROLOGIA PEDIÁTRICA</h3>
          <p>Tratamos as patologias que afetam os rins e vias urinárias como má formação congênita, infecções urinárias , litíase renal, glomerulopatias , entre outros</p>
        </div>
      </section>

      <section id="sobre-doutora">
        <div>
          <img src={sobreDoutora} alt="sobre-doutora" />
        </div>
        <div id="div-sobre-doutora">
          <h4>Sobre a Dra. Suzane Sales</h4>
          <p>Pediatra e nefrologista</p>
          <p>Formada pela Faculdade de Medicina do ABC, a Dra. Suzane Sales é especializada em pediatria pela Santa Casa de Misericórdia de São Paulo, além de ser sub-especializada em nefrologia pela Faculdade de Medicina da USP. Com mais de 10 anos de carreira médica a profissional dedica a sua vida à pediatria, com foco total na saúde, bem-estar e desenvolvimento dos pequenos.</p>
          <Buttons tipo="btn btn-primary" texto="Saiba Mais"/>
        </div>
      </section>

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
