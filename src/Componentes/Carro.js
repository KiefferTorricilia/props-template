function Carro(props) {
  return (
    <div>
      <h2>{props.carro1.modelo}</h2>
      <ul>
        <li>{props.carro1.cor}</li>
        <li>{props.carro1.ano} </li>
        <li> {props.carro1.flex ? "Sim" : "Não"} </li>
      </ul>
    </div>
  );
}

export default Carro;
