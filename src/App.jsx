import { useState } from "react";
import "./App.css";
import Sumador from "./components/Sumador";
import Calculadora from "./components/Calculadora";
import BuscadorCartas from "./components/BuscadorCartas";

function App() {

  const [view, setView] = useState("menu");


  return (
    <div className="main-container">
      {view === "menu" ? (
        <header className="header">
          <h1>Ejercicios</h1>
          <nav className="nav-menu">
            <button onClick={() => setView("sumador")}>Ejercicio Suma</button>
            <button onClick={() => setView("calculadora")}>Calculadora</button>
            <button onClick={() => setView("buscador")}>Buscador de Cartas</button>
          </nav>
        </header>
      ) : (
        <main className="content">
          <button className="back-button" onClick={() => setView("menu")}>Volver al menú</button>
          {view === "sumador" && <Sumador />}
          {view === "calculadora" && <Calculadora />}
          {view === "buscador" && <BuscadorCartas />}
        </main>
      )}
    </div >
  );
}

export default App;
