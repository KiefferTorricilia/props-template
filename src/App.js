import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const carro1 = {
    modelo: "Fusca",
    cor: "Rosa",
    ano: 1970,
    flex: true,
  }

  return (
    <div>
      <Garagem nome= {"Barbosa A"} carro1={carro1} />
    </div>
  );
}
