import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from '../pages/IndexPage';
import ReactPage from '../pages/ReactPage';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/react" element={<ReactPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export { Rotas };

//MUDAR NOME PARA ROTAS
// HOME É A TELA DE HOME