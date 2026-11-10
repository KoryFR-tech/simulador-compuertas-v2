import { Link } from 'react-router-dom';
import styles from '../CSS/Compuertas.module.css';
import React, {useState} from 'react';

export default function CompuertaXor() {
  //declarar los estados
    const [entradaA, setEntradaA] = useState(0);
    const [entradaB, setEntradaB] = useState(0);
  
    const resultado =  (entradaA !== entradaB) ? 1 : 0;
    //funcion para alternar entre 1 y 0
    const toggleEntradaA = () =>{
      setEntradaA(prev =>  (prev === 0 ? 1 : 0));
    };
  
    const toggleEntradaB = () => {
      setEntradaB(prev => (prev === 0 ? 1 : 0));
    };

    return (
      <div className={styles.container}>
        <h1>Compuerta XOR</h1>
        <p style={{ color: '#ccc' }}>Modifica las entradas A y B para observar el resultado</p>
        <p style={{color: '#ccc'}}>Da click en cada entrada para intercalar entre 0 y 1</p>
      {/*============DIAGRAMA========= */}
      <div className={styles['diagrama-container']}>
      {/*columna 1: entradas*/}
      <div className={styles['columna-entradas']}>
        <div className={styles['input-group']}>
          <label className={styles['label-flotante']}>Entrada A</label>
          <button
            onClick={toggleEntradaA}
            className={entradaA === 1 ? styles['btn-green'] : styles['btn-red']}
          >
            {entradaA}
          </button>
        </div>
        <div className={styles['input-group']}>
          <label className={styles['label-flotante']}>Entrada B</label>
          <button
            onClick={toggleEntradaB}
            className={entradaB === 1 ? styles['btn-green'] : styles['btn-red']}
          >
            {entradaB}
          </button>
        </div>
      </div>
      {/*COLUMNA 2: Conectores y compuerta */}
      <div className={styles['columna-centro']}>
        {/*lineas svg izquierda */}
        <svg width="80" height="160">
          <text x="0" y="25" className={styles['texto-conector']}>A</text>
          <path d="M 15,20 L 40,20 L 40,65 L 80,65" className={styles['linea-conector']} />
          
          <text x="0" y="145" className={styles['texto-conector']}>B</text>
          <path d="M 15,140 L 40,140 L 40,95 L 80,95" className={styles['linea-conector']}/>
        </svg>
      {/*Compuerta */}
      <div className={styles['compuerta-caja']}>XOR</div>

      {/*Conector de salida*/}
        <svg width="60" height="140">
          <path d="M 0,80 L 60,80" className={styles['linea-conector']} />
        </svg>
      </div>
      {/*Columna 3: Resultado */}
      <div className={styles['columna-resultado']}>
        <label className={styles['label-flotante-resultado']}>RESULTADO</label>
        <button
          className={`${styles['btn-resultado']} ${resultado === 1 ? styles['btn-green'] : styles['btn-red']}`}
        >
          {resultado}
        </button>
      </div>
    </div>

        <div className={styles['contenedor-tabla']}>
        <h4 className={styles['titulo-tabla']}>TABLA DE LA VERDAD</h4>
        <table className={styles['tabla-verdad']}>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>SALIDA</th>
            </tr>
          </thead>
          <tbody>
            <tr className={entradaA === 0 && entradaB === 0 ? styles['fila-activa'] : ''}>
              <td>0</td><td>0</td><td>0</td>
            </tr>
            <tr className={entradaA === 0 && entradaB === 1 ? styles['fila-activa'] : ''}>
              <td>0</td><td>1</td><td>1</td>
            </tr>
            <tr className={entradaA === 1 && entradaB === 0 ? styles['fila-activa'] : ''}>
              <td>1</td><td>0</td><td>1</td>
            </tr>
            <tr className={entradaA === 1 && entradaB === 1 ? styles['fila-activa'] : ''}>
              <td>1</td><td>1</td><td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
          {/* Botón/Enlace para regresar a la página principal */}
            <Link to="/" className={styles['btn-regresarMenu']}>
              {/* <button className={styles['btn-regresarMenu']}>Regresar al menú</button> */}
              Regresar al menú
            </Link>
    </div>
    )
}
