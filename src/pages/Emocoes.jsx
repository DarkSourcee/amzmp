import React from "react";
import { Banner } from "../components/Banner";
import { Notices } from "../components/Notices";

import "../styles/Emocoes.css";

import bebe from "../assets/img/Grupo 446.png";

export const Emocoes = () => {
    return (
        <>
            < Banner titulo="COMO LIDAR COM AS BIRRAS E EMOÇÕES DAS CRIANÇAS?" 
                     fundo={bebe}
                     align="start"
                     justify="end"
                     cor_texto="white"/>
            
            <main className="emocoes">
                <p>As birras e os comportamentos desafiadores fazem parte do desenvolvimento infantil, mas podem ser desafiadores para os pais. Quando as crianças estão tendo uma crise, é importante que os pais se mantenham calmos e ofereçam apoio emocional.</p>
                <div>
                    <i class="fa-solid fa-baby"></i>
                    <p>Uma dica importante aqui é ajudar a criança a expressar suas emoções. É fundamental que os pais ensinem os filhos a identificar o que estão sentindo e expressar de forma saudável, sem agressividade ou birras.</p>
                </div>
                <div>
                    <i class="fa-regular fa-hand"></i>
                    <p>Outra dica é oferecer alternativas de comportamento. Em vez de simplesmente dizer "não" a uma demanda da criança, os pais podem oferecer opções que sejam adequadas para a situação. Por exemplo, se a criança quer um doce antes do jantar, em vez de dizer "não", os pais podem dizer que ela pode escolher entre uma fruta ou um iogurte.</p>
                </div>
                <p>Por fim, é importante que você, pai ou mãe, estimula o desenvolvimento da inteligência emocional nas crianças. Isso envolve ensinar os pequenos a identificarem e lidarem com emoções de forma saudável, além de mostrar a importância da empatia e da compaixão.</p>
            </main>

            < Notices />
        </>
    );
} 