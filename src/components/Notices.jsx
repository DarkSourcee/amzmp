import React from "react";

import "../styles/Notices.css";

export const Notices = () => {
  return (
    <section id="noticias">
      <h4 className="titulo">NOTÍCIAS E CONTEÚDO</h4>
      <div id="conteudo">
        <div className="primeiros-cuidados padrao">
          <h5>Quais os primeiros cuidados com o recém-nascido?</h5>
          <p>
            6 dicas especiais do dia a dia para seu filho ficar mais seguro e
            tranquilo.
          </p>
        </div>

        <div className="importancia-brincar padrao">
          <h5>
            Qual a importância das brincadeiras para desenvolver o meu filho?
          </h5>
          <p>Saiba como as brincadeiras são fundamentais aos pequenos.</p>
        </div>

        <div className="grid-conjunta padrao">
          <div className="como-lidar">
            <h5>Como lidar com as birras e emoções das crianças?</h5>
            <p>Veja algumas dicas para lidar com esta situação.</p>
          </div>

          <div className="forma-rotina">
            <h5>De que forma a rotina desenvolve os pequenos?</h5>
            <p>
              Saiba por que a rotina é fundamental ao crescimento saudável das
              crianças.
            </p>
          </div>
        </div>

        <div className="como-estimular padrao">
          <h5>Como estimular a autonomia infantil?</h5>
          <p>
            Incentivar a autonomia é importante. Veja algumas dicas do que
            fazer.
          </p>
        </div>
      </div>
    </section>
  );
};
