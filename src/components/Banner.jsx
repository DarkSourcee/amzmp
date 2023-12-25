import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DynamicDiv = styled.div`
  height: 316px;
  width: 100%;
  opacity: 0.96;
  background: url('${(props) => props.$fundo}') no-repeat padding-box !important;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  color: ${(props) => props.$cor_texto};
`;

export const Banner = ({ titulo, subtitulo, img, fundo, align, justify, cor_texto }) => {
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
      <DynamicDiv $fundo={fundo} $align={align} $justify={justify} $cor_texto={cor_texto}>
        {img && <img src={img} alt="Imagem" />}
        <h1>{titulo}</h1>
        {subtitulo && <p>{subtitulo}</p>}
      </DynamicDiv>
    </>
  );
};
