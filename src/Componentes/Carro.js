function Carro(props) {
  return (
    <div>
      <h2>{props.automovel.modelo}</h2>
      <ul>
        <li>{props.automovel.cor}</li>
        <li>{props.automovel.ano} </li>
        <li> {props.automovel.flex ? "Sim" : "Não"} </li>
        <li>Adicionado por: {props.adicionadoPor}</li>
      </ul>
    </div>
  );
}

export default Carro;
