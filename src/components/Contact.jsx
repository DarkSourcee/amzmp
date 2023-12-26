import React from 'react';

import whatsIcon from "../assets/img/WHATSAPP.png";
import foneIcon from "../assets/img/icone-telefone-open.png";

export const Contato = () => {
  const phoneNumber = '+5511910578890'; // Substitua pelo seu número de telefone
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  const contatoStyle = {
    position: 'fixed',
    display: 'flex',
    bottom: '5px',
    right: '50px',
    backgroundColor: '#ffffff',
    padding: '5px',
    border: '1px solid #cccccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={contatoStyle}>
      <p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img src={whatsIcon} alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
        </a>
      </p>
      <p>
        <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none' }}>
          <img src={foneIcon} alt="Telefone" style={{ width: '24px', height: '24px' }} />
        </a>
      </p>
    </div>
  );
};
