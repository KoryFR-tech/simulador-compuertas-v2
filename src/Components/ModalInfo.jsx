export default function ModalInfo({isOpen, onClose}){
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Información</h2>
                <p>Este es un simulador de compuertas lógicas que</p>
                <p>te ayudará a entender cómo funciona la lógica de selección</p>
                <p>mediante botones interactivos entre 0 y 1.</p>
                <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}