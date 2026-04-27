import { useState } from "react";
import './Calculadora.css';

const Calculadora = () => {

    const [calculate, setcalculate] = useState("");



    const calculator = value => {
        if (value === "C") {
            setcalculate("");
        } else if (value === "Remove") {
            setcalculate(calculate.slice(0, -1));
        } else if (value === "=") {
            try {
                setcalculate(eval(calculate).toString());
            } catch (error) {
                alert("Error en la expresión");
            }
        } else {
            setcalculate(calculate + value);
        }
    };

    return (

        <div className="contenedor-calc">
            <h3 style={{ textAlign: 'center', color: '#eee', marginBottom: '10px' }}>Calculadora</h3>

            <input
                className="pantalla"
                type="text"
                placeholder="Ingresa un número"
                value={calculate}
                readOnly
            />

            <div className="botones-calculadora">

                {[
                    "C", "/", "*", "Remove",
                    "7", "8", "9", "-",
                    "4", "5", "6", "+",
                    "1", "2", "3", "=",
                    "0", ".",
                ].map(value => (
                    <button key={value} onClick={() => calculator(value)}>
                        {value}
                    </button>
                ))}
            </div>
            <br />
            <br />

        </div>


    );
}

export default Calculadora;