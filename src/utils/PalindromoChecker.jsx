import React, { useState } from 'react';

function normalizar(cadena) {
  return cadena
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, ''); // Elimina todo lo que no sea letra o número
}

function esPalindromo(cadena) {
  const limpia = normalizar(cadena);
  const invertida = limpia.split('').reverse().join('');
  return limpia === invertida;
}

function PalindromoChecker() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState(null);

  const manejarClick = () => {
    if (input.trim() === '') {
      setResultado(null);
      return;
    }
    const esValido = esPalindromo(input);
    setResultado(esValido);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Verificador de Palíndromos</h2>
      <input
        type="text"
        placeholder="Escribe una palabra o frase"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={manejarClick}>Verificar</button>

      {resultado !== null && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          {resultado ? '✅ Sí, es un palíndromo' : '❌ No, no es un palíndromo'}
        </p>
      )}
    </div>
  );
}

export default PalindromoChecker;
