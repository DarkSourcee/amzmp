import React from "react";

import { Notices } from "../components/Notices";
import { Banner } from "../components/Banner";

import urso from "../assets/img/Grupo 107.png"

export const NoticiasConteudos = () => {
    return (
        <>
            < Banner titulo="BLOG" 
                     subtitulo="Dra. Suzane Sales" 
                     img={urso} 
                     fundo="linear-gradient(45deg, #C49395, #E2B5B7, #E4AAAC)"
                     align="center"
                     justify="center"
                     cor_texto="white"/>
            < Notices />
        </>
    );
}