import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DynamicDiv = styled.div`
  height: 316px;
  width: 100%;
  opacity: 0.96;
  background: ${(props) =>
    props.$padrao && props.$padrao !== 'S'
      ? `url('${props.$fundo}') no-repeat`
      : 'linear-gradient(45deg, #C49395, #E2B5B7, #E4AAAC) no-repeat'} !important;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  color: ${(props) => props.$cor_texto};
`;

export const Banner = ({ titulo, subtitulo, img, fundo, align, justify, cor_texto, padrao }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = generateRandomColor();
      setBackgroundColor(randomColor);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <DynamicDiv $fundo={fundo} $align={align} $justify={justify} $cor_texto={cor_texto} $padrao={padrao}>
        {img && <img src={img} alt="Imagem" />}
        <h1>{titulo}</h1>
        {subtitulo && <p>{subtitulo}</p>}
      </DynamicDiv>
    </>
  );
};
