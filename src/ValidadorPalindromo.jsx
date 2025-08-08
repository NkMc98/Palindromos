import React, { useState } from 'react';

function ValidadorPalindromo() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState(null);

  function esPalindromo(cadena) {
    const normalizada = cadena.toLowerCase();
    const invertida = normalizada.split('').reverse().join('');
    return normalizada === invertida;
  }

  const manejarVerificacion = () => {
    setResultado(esPalindromo(texto));
  };

  return (
    <div>
      <h2>¿Es un palíndromo?</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una palabra"
      />
      <button onClick={manejarVerificacion}>Verificar</button>
      {resultado !== null && (
        <p>Resultado: {resultado ? '✅ Es palíndromo' : '❌ No es palíndromo'}</p>
      )}
    </div>
  );
}

export default ValidadorPalindromo;
