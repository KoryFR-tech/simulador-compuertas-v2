import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../CSS/MenuPrincipal.module.css'

export default function MenuPrincipal() {
    const navigate = useNavigate();
    //lista escalable: para crear un simulador nuevo solo agregar un objeto
    const simuladores = [
        {
            id: 'compuertas',
            titulo: 'Simulador de Compuertas Lógicas',
            descripcion: 'Evalúa tablas de verdad y salidas binarias en tiempo real (AND, OR y XOR)',
            ruta: '/compuertas',
            disponible: true,
        },
        {
            id: 'calculo-integral',
            titulo: 'Circutios Combinacionales',
            descripcion: 'Visualiza el área bajo la curva y compara aproximaciones rectangules con la integral definida.',
            ruta: '/calculo-integral',
            disponible: false,
        },
    ];
    return (
        <div className={styles.hubContainer}>
            <header className={styles.header}>
                <h1>LABORATORIO DE LÓGICA DIGITAL</h1>
                <p>Selecciona un simulador para comenzar a experimentar</p>
            </header>
            <div className={styles.gridSimuladores}>
                {simuladores.map((sim) => (
                    <div
                        key={sim.id}
                        className={`${styles.card} ${!sim.disponible ? styles.cardDisabled : ''}`}
                    >
                        <h2>{sim.titulo}</h2>
                        <p>{sim.descripcion}</p>
                        <button
                            onClick={() => sim.disponible && navigate(sim.ruta)}
                            disabled={!sim.disponible}
                            className={sim.disponible ? styles.btnAbrir : styles.btnProximamente}
                        >
                            {sim.disponible ? 'Abrir Simulador' : 'Proximamente'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}