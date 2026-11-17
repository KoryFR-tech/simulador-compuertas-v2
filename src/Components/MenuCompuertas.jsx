import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ModalInfo from './ModalInfo';
import '../CSS/App.home.css';
import '../CSS/ModalInfo.css';

export default function MenuCompuertas() {
    const navigate = useNavigate();
    const [modalAbierto, setModalAbierto] = useState(false);

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
            <div className="container-btnsInferiores">
            <button className="btn-info" onClick={() => setModalAbierto(true)}>ℹ️Información</button>
            <button className="btn-info" onClick={() => navigate('/')}>
                Menú de simuladores
            </button>
            </div>

            <ModalInfo
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
            />
        </div>
    );
}