export function esPalindromo(cadena) {
  const normalizada = cadena.toLowerCase();
  const invertida = normalizada.split('').reverse().join('');
  return normalizada === invertida;
}
