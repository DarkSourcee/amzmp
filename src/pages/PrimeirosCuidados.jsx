import React from "react";

import { Notices } from "../components/Notices";
import { Banner } from "../components/Banner";

import "../styles/PrimeirosCuidados.css";

import pathImagem from "../assets/img/Grupo 444.png"; //ver pq não esta aparecendo a imagem

export const PrimeirosCuidados = () => {
    return (
        <>
            < Banner titulo="QUAIS OS PRIMEIROS CUIDADOS COM O RECÉM-NASCIDO?" 
                     fundo={pathImagem}
                     align="start"
                     justify="center"
                     cor_texto="black"/>

            <section className="cuidados">
                <p>Os primeiros dias em casa com um recém-nascido podem ser um desafio para os pais, especialmente se for o primeiro filho. Aqui estão alguns cuidados essenciais para o recém-nascido nos primeiros dias de vida:</p>
                
                <div className="amamentacao">
                    <i class="fa-solid fa-bottle-water"></i>
                    <p><b> Amamentação:</b> O leite materno é o melhor alimento para o recém-nascido, pois contém todos os nutrientes que ele precisa e ajuda a fortalecer o sistema imunológico. Procure um profissional de saúde para orientá-la sobre a amamentação.</p>
                </div>
                <div className="fraldas">

                </div>
                <div className="banho">
                    <i class="fa-solid fa-bath"></i>
                    <p><b> Banho:</b> Pode ser diário, mas também pode ser realizado 2 a 3 vezes por semana, com produtos de higiene adequados para a pele do RN.</p>
                </div>
                <div className="sono">
                    <i class="fa-solid fa-bed"></i>
                    <p><b> Sono:</b> Recém-nascidos dormem muitas horas por dia. Certifique-se de que o bebê durma em um lugar seguro e confortável, como um berço.</p>
                </div>
                <div className="vacina">
                    <i class="fa-solid fa-syringe"></i>
                    <p><b> Vacine seu filho:</b> Certifique-se de manter as vacinas do bebê em dia, seguindo as recomendações do calendário de vacinação.</p>
                </div>
                <div className="contato">
                    <i class="fa-solid fa-hands"></i>
                    <p><b> Contato com outras pessoas:</b> Evite que muitas pessoas tenham contato com o bebê nos primeiros dias de vida, pois o sistema imunológico do recém-nascido ainda está se desenvolvendo e ele é mais vulnerável a infecções.</p>
                </div>
            
            </section>

            < Notices />
        </>
    );
}