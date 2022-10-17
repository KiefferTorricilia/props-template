import Carro from "./Carro";

function Garagem(props) {

  console.log(props)
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <Carro carro1={props.carro1} />
      <Carro carro1={props.carro1} />
      <Carro carro1={props.carro1} />
      <Carro carro1={props.carro1} />
    </div>
  );
}

export default Garagem;
