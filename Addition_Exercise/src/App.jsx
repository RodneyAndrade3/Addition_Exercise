import { useState } from "react";
import "./App.css";
function app() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [vista, setVista] = useState("");
  const [calculate, setcalculate] = useState("");

  const sumar = () => {
    const resultado = Number(number1) + Number(number2);
    alert(`El resultado es: ${resultado}`);
  };

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
    <>
      <h2>Ejercicios</h2>
      <br />
      <button onClick={() => setVista("suma")}>Ejercicio Suma </button>
      <br />
      <br />
      <button onClick={() => setVista("calculadora")}>Calculadora</button>
      {vista === "suma" && (
        <div>
          <h3>Ingrese dos números para sumarlos</h3>

          <input
            type="text"
            placeholder="Numero 1"
            value={number1}
            onChange={e => setNumber1(e.target.value)}
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="Numero 2"
            value={number2}
            onChange={e => setNumber2(e.target.value)}
          />
          <br />
          <br />

          <button onClick={sumar}>Sumar</button>
        </div>
      )}
      {vista === "calculadora" && (
        <>
          <h3>Calculadora</h3>
          <div className="contenedor">
            <input
              className="pantalla"
              type="text"
              placeholder="Ingrese un numero"
              value={calculate}
            />

            <div className="botones-calculadora">
            
              {[
                "C", "/",  "*", "Remove",
                "7", "8",  "9",  "-",
                "4", "5",  "6",  "+",
                "1", "2",  "3",  "=",
                "0",       ".",
              ].map(value => (
                <button key={value} onClick={() => calculator(value)}>
                  {value}
                </button>
              ))}
            </div>
            <br />
            <br />
          </div>
       </>
      )}
    </>
  );
}

export default app;


