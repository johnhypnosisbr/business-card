
import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';

export default function Interest() {
    return (
        <div className="interest">
            <img src="../img/react.png" alt="" className="footer-icon" />
            <p style={{ color: "white" }}>Aplicar framework de front-end para desenvolver aplicação web (React, Laravel, Postman) .</p>

            <img src="../img/js.png" alt="" className="footer-icon" />
            <p style={{ color: "white" }}>Aplicar sintaxe da linguagem javascript.</p>

            <img src="../img/php.avif" alt="" className="footer-icon" />
            <p style={{ color: "white" }}>Aplicar conceitos básicos de sintaxe de programação da linguagem PHP.</p>

            <img src="../img/html.png" alt="" className="footer-icon" />
            <p style={{ color: "white" }}>Criar páginas html e css seguindo boas práticas de design e usabilidade.</p>
        </div>
    )
}