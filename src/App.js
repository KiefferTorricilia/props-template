import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  
  const garagem1 = [
    {
      modelo: "Fusca",
      cor: "Rosa",
      ano: 1970,
      flex: true,
    },
    {
      modelo: "Audi",
      cor: "preto",
      ano: 2020,
      flex: true,
    },
    {
      modelo: "Camaro",
      cor: "Amarelo",
      ano: 2022,
      flex: false,
    },
    {
      modelo: "BMW",
      cor: "Branco",
      ano: 2015,
      flex: true,
    }

  ]

  const garagem2 = [
    {
      modelo: "Meu ovo",
      cor: "Rosa",
      ano: 1970,
      flex: true,
    },
    {
      modelo: "CU",
      cor: "preto",
      ano: 2020,
      flex: true,
    },
    {
      modelo: "Buceta",
      cor: "Amarelo",
      ano: 2022,
      flex: false,
    },
    {
      modelo: "caralho",
      cor: "Branco",
      ano: 2015,
      flex: true,
    }

  ]

  const boasVindas = (nome) => {
    alert(`Boas vindas à garagem de ${nome}`)
  }

  return (
    <div>
      <Garagem nome= {"Kieffer"} automoveis={garagem1} boasVindas={boasVindas} />
      <Garagem nome= {"Natália"} automoveis={garagem2} boasVindas={boasVindas} />
    </div>
    
  );
}
