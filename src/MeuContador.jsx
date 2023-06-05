import { useState } from 'react'

//Estados e Eventos
export default function MeuContador() {
  const [contador, setContador] = useState(0)
  
  function aumentar() {
    setContador(contador + 1)
  }
  
  return (
    <div>
    <h1>Meu Contador: {contador}</h1>
    { contador > 9 ? <h4>Valor alto</h4> : null }
      <button onClick={aumentar}>aumentando</button>
    </div>
    )
}