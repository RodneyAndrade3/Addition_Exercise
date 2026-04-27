import { useState } from 'react'
import './Sumador.css';

const Sumador = () => {

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')

    const sumar = () => {

        const resultado = Number(number1) + Number(number2)
        alert(`El resultado es: ${resultado}`)
    }

    const clean = () => {
        setNumber1('')
        setNumber2('')
    }

    return (
        <div className="sumador-container">
            <h3>Addition Exercise</h3>

            <input
                className='input-field'
                type="text"
                placeholder="Número 1"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
            />

            <input
                className='input-field'
                type="text"
                placeholder="Número 2"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
            />

            <div className="botones-group">
                <button className="btn-sumar" onClick={sumar}>
                    Sumar
                </button>
                <button className="btn-borrar" onClick={clean}>
                    Limpiar
                </button>
            </div>
        </div>
    )
}

export default Sumador;