import MeuContador from './MeuContador'
import Card from './Card'

function App() {

  return (
    <div>
      <h1>Olá Mundo, React</h1>
      <MeuBotao conteudo="Não clique aqui" />
      <MeuBotao conteudo="Clique aqui" />
      
      <MeuContador />
      
      <Card quantidade={0} />
      <Card quantidade={1} />
      <Card quantidade={2} />
      </div>
  )
}
//Props e Componentes
function MeuBotao(props) {
  return (
      <button>{props.conteudo}</button>
    )
}

export default App