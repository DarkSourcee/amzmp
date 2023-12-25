import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Buttons = ({tipo, texto, icone}) => {
    return (
        <button className={tipo}>
            {icone && <i className={icone}></i> }
            {texto}
        </button>
    );
}