import Carro from "./Carro";

function Garagem(props) {

  console.log(props)
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={() => props.boasVindas(props.nome)} >Dá boas vindas</button>
      <Carro automovel={props.automoveis[0]} adicionadoPor={"Patrícia"} />
      <Carro automovel={props.automoveis[1]} adicionadoPor={"Marco"}/>
      <Carro automovel={props.automoveis[2]} adicionadoPor={"José"}/>
      <Carro automovel={props.automoveis[3]} adicionadoPor={"Patrícia"}/>
    </div>
  );
}

export default Garagem;
