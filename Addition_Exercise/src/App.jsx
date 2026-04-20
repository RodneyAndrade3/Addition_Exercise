import { useState } from 'react'


function App() {
  
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')

  const sumar = () => {
    // Convertimos a número y sumamos
    const resultado = Number(number1) + Number(number2)
    alert(`El resultado es: ${resultado}`)
  }

  return (
    <div >
      <h3>Addition Exercise</h3>
      
      <input 
        type="text" 
        placeholder="Número 1" 
        value={number1}
        onChange={(e) => setNumber1(e.target.value)} 
      />
      <br />
      <br />

      <input 
        type="text" 
        placeholder="Número 2" 
        value={number2}
        onChange={(e) => setNumber2(e.target.value)} 
      />
      <br />
      <br />

      <button onClick={sumar}>Sumar</button>
    </div>
  )
}

export default App

