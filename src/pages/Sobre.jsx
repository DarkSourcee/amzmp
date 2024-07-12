import React from "react";
import "../styles/Sobre.css";

import DSC_6984_copiar from "../assets/img/DSC_6984 copiar.png";
import grupo_25 from "../assets/img/Grupo 25.png";
import grupo_33 from "../assets/img/Grupo 33.png";
import grupo_12 from "../assets/img/Grupo 12.png";

export const Sobre = () => {
    return (
        <>
            <main>
                <section id="sobre-banner">
                    {/* imagem vai no css */}
                    <h1>SOBRE A DRA. SUZANE SALES</h1>
                </section>

                <section id="sobre-descritivo">
                    <h2>PEDIATRA E NEFROLOGISTA</h2>
                    <br />
                    <p>Formada pela <b>Faculdade de Medicina do ABC</b>, a Dra. Suzane Sales é <b>especializada em pediatria pela Santa Casa de Misericórdia de São Paulo</b>, além de ser <b>sub-especializada em nefrologia pela Faculdade de Medicina da USP.</b></p>
                    <br />
                    <p>Em mais de 10 anos de carreira, a profissional já passou por diversos hospitais de referência como o Hospital Sabará, especializado em crianças e adolescentes, e há mais de 5 anos integra o corpo clínico dos hospitais Israelita Albert Einstein e Hospital das Clínicas de São Paulo. Neste último, a doutora é integrante da equipe de nefrologia pediátrica.</p>
                </section>

                <section id="fala-doutora">
                    <div id="fala-doutora-img">
                        <img src={DSC_6984_copiar} alt="" />
                    </div>

                    <div id="fala-doutora-conteudo">
                        <h2><b>FALA, DOUTORA!</b></h2>
                        <br />
                        <p className="paragrafo"><b>"O carinho pelas crianças sempre me incentivou e foi que o me motivou dedicar a minha vida à pediatria."</b></p>
                        <br />
                        <p>“Sou mãe de uma menina de 3 aninhos. Compreendo cada vez mais os desafios que a vida nos impõe com a rotina intensa, hiper conexão, alimentos ultra processados e excessos em geral que podem influenciar na saúde física e mental dos nossos pequenos. Faz parte do meu estilo de atendimento avaliar a criança como um todo, sempre prezando por uma vida mais saudável e equilibrada. Meu grande propósito é promover o desenvolvimento de crianças saudáveis e felizes. A participação da família é fundamental no processo de atendimento. Gosto de envolver todos os integrantes do núcleo familiar para compreender as dinâmicas e rotinas, criando um plano de atendimento personalizado. “</p>
                    </div>
                </section>

                <section id="sobre-trajetoria">
                    <div className="trajetoria">
                        <img src={grupo_25} alt=""/>
                        <img src={grupo_33} alt=""/>
                        <img src={grupo_12} alt=""/>
                        <h4><b>TRAJETÓRIA MÉDICA</b></h4>
                    </div>

                    <div className="grid-s">
                        <div className="titulos">
                            <p className="grid-titu">Títulos</p>
                            <br />
                            <p>•Especialista em Nefrologia Pediátrica pela Sociedade Brasileira de Nefrologia - 2017</p>
                            <br />
                            <p>•Especialista em Pediatria (TEP) pela Sociedade Brasileira de Pediatria - 2015</p>
                        </div>

                        <div className="residencia">
                            <p className="grid-titu">Residência Médica</p>
                            <br />
                            <p>•Residência médica no Programa de Nefrologia Pediátrica do Hospital das Clínicas – Instituto da Criança (FMUSP-HC), iniciado em 2015 e concluído em 2017.</p>
                            <br />
                            <p>•Residência médica no Programa de Pediatria da Irmandade da Santa Casa de Misericórdia de São Paulo, iniciado em 2013 e concluído em 2015.</p> 
                        </div>
                    </div>

                    <div className="experiencia-prof">
                        <p className="experiencia-prof-titu">EXPERIÊNCIA PROFISSIONAL</p>
                        <br />
                        <p>• Médica plantonista PS Pediatria do Hospital Israelita Albert Einstein unidade Morumbi – Admissão em janeiro de 2017. </p>
                        <p>• Médica da equipe de nefrologia Pediátrica do Instituto da Criança (FMUSP-HC) – Admissão em junho de 2018. </p>
                        <p>• Médica plantonista da Enfermaria do Hospital Sabará 2016-2017</p>
                    </div>
                </section>
            </main>
        </>
    );
}