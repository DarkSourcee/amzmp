import React from "react";

import "../styles/RotinaInfantil.css";
import img from "../assets/img/Grupo 447.png";
import { Banner } from "../components/Banner";
import { Notices } from "../components/Notices";

export const RotinaInfantil = () => {
    return (
        <>
            < Banner titulo="DE QUE FORMA A ROTINA ESTIMULA O DESENVOLVIMENTO INFANTIL?" 
                     fundo={img}
                     align="start"
                     justify="start"
                     cor_texto="black"/>

            <main>
                <p>A rotina é fundamental para o desenvolvimento saudável das crianças. Ela traz segurança e previsibilidade para o dia a dia, o que é especialmente importante para os bebês e crianças pequenas.</p>
                <div>
                    <i class="fa-solid fa-gamepad"></i>
                    <i class="fa-solid fa-car-side"></i>
                    <i class="fa-solid fa-basketball"></i>
                    <i class="fa-solid fa-book"></i>
                    <i class="fa-solid fa-bed"></i>
                </div>
                <p>Estabelecer uma rotina saudável pode ajudar a promover o sono, melhorar a alimentação, reduzir o estresse, além de desenvolver o lado emocional e cognitivo da criança.
                    <br /> <br />
                    Para estabelecer uma rotina saudável, é importante estabelecer horários regulares para as refeições, banho, sonecas e hora de dormir. Aqui também é necessário lembrar que o dia a dia deve ser flexível e adaptável às necessidades da criança e da família, mas também consistente e previsível.
                    <br /> <br />
                    Além disso, garanta que a rotina seja apropriada para a idade e o estágio de desenvolvimento da criança. Por exemplo: bebês precisam de mais sonecas durante o dia, enquanto crianças mais velhas podem precisar de tempo para brincar e se exercitar. 
                    <br /> <br />
                    Não se esqueça que a rotina não precisa ser chata ou monótona. É possível incluir atividades divertidas e estimulantes para a criança, como brincadeiras, leitura de livros e passeios ao ar livre.
                </p>
            </main>

            < Notices />
        </>
    );
}