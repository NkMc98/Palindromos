// import React, { useState } from 'react';


// const NombreUsuario = () => {
//   const [nombre, setNombre] = useState('');
//   const [mostrarSaludo, setMostrarSaludo] = useState(false);

//   const manejarCambio = (e) => {
//     setNombre(e.target.value);
//   };

//   const manejarClick = () => {
//     setMostrarSaludo(true);
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Escribe tu nombre" 
//         value={nombre} 
//         onChange={manejarCambio} 
//       />
//       <button onClick={manejarClick}>Mostrar saludo</button>
//       {mostrarSaludo && <p>Hola, {nombre}!</p>}
//     </div>
//   );
// };

// export default NombreUsuario;


// import React from 'react';
// import ValidadorPalindromo from './ValidadorPalindromo';

// function App() {
//   return (
//     <div className="App">
//       <h1>Mi App de Palíndromos</h1>
//       <ValidadorPalindromo />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import PalindromoChecker from './utils/PalindromoChecker';

// function App() {
//   return (
//     <div className="App">
//       <h1>Mi App React</h1>
//       <PalindromoChecker />
//     </div>
//   );
// }

// export default App;

import React from "react";
import saludo from "./utils/saludo";

function App() {
  return (
    <div className="App">
      <h1>Mi App React</h1>
      <saludo/>
    </div>
  )
}
export default App;