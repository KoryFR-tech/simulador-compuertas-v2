import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import CompuertaAnd from './Components/CompuertaAnd';
import CompuertaOr from './Components/CompuertaOr';
import CompuertaXor from './Components/CompuertaXor';
import ModalInfo from './Components/ModalInfo';
import './CSS/App.home.css';
import  './CSS/ModalInfo.css';
function Home() {
    const navigate = useNavigate();
    const [modalAbierto, setModalAbierto] = useState (false);
    return(
        <div className="container-compuertas">
            <h1>SIMULADOR DE LÓGICA DIGITAL</h1>
            <h2>Aprende de forma interactiva el funcionamiento de las compuertas lógicas</h2>
            <p>Selecciona una compuerta para comenzar:</p>
            <div className="container-btnsCompuertas">
                <button onClick={() => navigate('/and')}>Compuerta AND</button>
                <button onClick={() => navigate('/or')}>Compuerta OR</button>
                <button onClick={() => navigate('/xor')}>Compuerta XOR</button>
            </div>
            <button className="btn-info" onClick={() => setModalAbierto(true)}>ℹ️Información</button>
            <ModalInfo
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
            />
        </div>
    );
}

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/and" element={<CompuertaAnd />} />
                <Route path="/or" element={<CompuertaOr />} />
                <Route path="/xor" element={<CompuertaXor />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
