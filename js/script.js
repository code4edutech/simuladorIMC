document.getElementById('imcForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura) {
     alert('Por favor, preencha ambos os campos.');
     return;
  }

  const imc = peso / (altura * altura);
  let resultado = '';

  if (imc < 18.5) {
     resultado = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
  } else if (imc >= 18.5 && imc < 24.9) {
     resultado = `IMC: ${imc.toFixed(2)} - Peso normal`;
  } else if (imc >= 25 && imc < 29.9) {
     resultado = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
  } else {
     resultado = `IMC: ${imc.toFixed(2)} - Obesidade`;
  }

  document.getElementById('resultadoIMC').textContent = resultado;
});
