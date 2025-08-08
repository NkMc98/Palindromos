import React, {useState} from "react";

function Saludo ({nombre}) {
    return <h2>¡Bienvenido, {nombre}!</h2>;
}
// Componente principal
function PedirNombre() {
  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const handleClick = () => {
    setMostrarSaludo(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Saludar</button>
      {mostrarSaludo && <Saludo nombre={nombre} />}
    </div>
  );
}

export default Saludo;