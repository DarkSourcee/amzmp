import React from "react";

import img from "../assets/img/Grupo 448.png";
import { Banner } from "../components/Banner";
import { Notices } from "../components/Notices";
import "../styles/Emocoes.css";

export const Estimulo = () => {
    return (
        <>
            < Banner titulo="COMO ESTIMULAR A AUTONOMIA INFANTIL?" 
                     fundo={img}
                     align="start"
                     justify="end"
                     cor_texto="white"/>

            <main>
                <p>Estimular a autonomia das crianças desde cedo é importante para que elas possam desenvolver habilidades e se tornarem mais independentes. No entanto, muitos pais podem ter dúvidas sobre como fazer isso de maneira adequada e segura.</p>
                <div>
                    <i class="fa-solid fa-gamepad"></i>
                    <i class="fa-solid fa-dice"></i>
                    <i class="fa-solid fa-chess-rook"></i>
                    <i class="fa-solid fa-puzzle-piece"></i>
                </div>
                <p>Uma das primeiras coisas a se fazer é dar às crianças a oportunidade de fazer escolhas simples, como escolher a roupa que vão vestir ou qual brinquedo querem brincar. Também é importante encorajá-las a realizar tarefas simples, como guardar os brinquedos após brincar ou ajudar a colocar a mesa. 
                    <br /><br />
                    Além disso, é importante elogiar e incentivar as crianças a cada pequena conquista, mostrando que confiamos nelas e valorizamos seus esforços. É fundamental permitir que elas experimentem, errando e acertando, e dar a elas espaço para aprender com seus próprios erros. 
                    <br /><br />
                    Outra dica é permitir que as crianças expressem seus próprios sentimentos e opiniões. Isso pode ser feito através de conversas e perguntas abertas, que estimulem a comunicação e a reflexão. Dessa forma, a criança aprenderá a identificar seus próprios sentimentos e a se comunicar de maneira eficaz.</p>
            </main>

            < Notices />
        </>
    );
}