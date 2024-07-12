import React from "react";

import { Notices } from "../components/Notices";
import { Banner } from "../components/Banner";

import "../styles/ImportanciaBrincadeiras.css";

import img from "../assets/img/Grupo 445.png";

export const ImportanciaBrincadeiras = () => {
    return (
        <>
            < Banner titulo="QUAL A IMPORTÂNCIA DAS BRINCADEIRAS INFANTIS PARA DESENVOLVER O MEU FILHO?" 
                     fundo={img}
                     align="start"
                     justify="end"
                     cor_texto="black"/>
            
            <section className="conteudo">
                <p>As brincadeiras são fundamentais para o desenvolvimento infantil. Além de ser uma forma divertida de passar o tempo, as brincadeiras ajudam a criança a desenvolver habilidades importantes, como a coordenação motora, a criatividade e a socialização. 
                    <br /> <br />
                   As brincadeiras também estimulam a imaginação e ajudam as crianças a aprenderem a lidar com emoções. Para os pais, é importante oferecer às crianças diferentes tipos de brincadeiras, que sejam adequadas à idade e ao desenvolvimento da criança. Brinquedos simples, como bolas, bonecas e carrinhos, podem proporcionar horas de diversão e aprendizado.
                </p>

                <div className="flex">
                    <i class="fa-solid fa-car-side"></i>
                    <i class="fa-solid fa-volleyball"></i>
                    <i class="fa-solid fa-dice-five"></i>
                    <i class="fa-solid fa-gamepad"></i>
                </div>

                <p>Jogos de tabuleiro e quebra-cabeças também são excelentes opções para desenvolver a concentração e a lógica. No entanto, é importante lembrar que as brincadeiras devem ser espontâneas e livres, sem pressão para atingir um objetivo ou meta. 
                   <br /> <br /> 
                   Os pais devem estar presentes durante as brincadeiras, mas permitir que a criança conduza o jogo da forma que preferir.
                </p>
            </section>

            < Notices />
        </>
    );
}