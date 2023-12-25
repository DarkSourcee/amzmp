import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logotipo-suzane.png";
import { Link } from "react-router-dom";
import { Nav, Button, Offcanvas } from "react-bootstrap";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="cabecalho">
      <div>
        <img src={logo} alt="Logotipo" />
      </div>
      <div>
        <Nav>
          <Nav.Link as={Link} to="/">
            Página inicial
          </Nav.Link>
          <Nav.Link as={Link} to="/sobre">
            Sobre
          </Nav.Link>
          <Button variant="primary" onClick={handleMenuToggle}>
            Menu
          </Button>
        </Nav>
      </div>
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} className="menu-lateral">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu Lateral</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/primeiros-cuidados" onClick={() => setShowMenu(false)}>
              Cuidados
            </Nav.Link>
            <Nav.Link as={Link} to="/noticias-conteudos" onClick={() => setShowMenu(false)}>
              Notícias de Conteúdo
            </Nav.Link>
            <Nav.Link as={Link} to="/importancia-brincadeiras" onClick={() => setShowMenu(false)}>
              Brincadeiras
            </Nav.Link>
            <Nav.Link as={Link} to="/emocoes" onClick={() => setShowMenu(false)}>
              Emoções
            </Nav.Link>
            <Nav.Link as={Link} to="/rotina-infantil" onClick={() => setShowMenu(false)}>
              Rotina Infantil
            </Nav.Link>
            <Nav.Link as={Link} to="/estimulo" onClick={() => setShowMenu(false)}>
              Estimulo
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
