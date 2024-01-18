const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const sisi = input.value;
  const luas = sisi * sisi;
  const keliling = 4 * sisi;
  result.innerHTML = `Luas: ${luas}<br>Keliling: ${keliling}`;
  
});