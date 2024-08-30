const btnFibonacci = document.getElementById("btnFibonacci");
const resultadoFibonacci = document.getElementById("resultadoFibonacci");

btnFibonacci.addEventListener("click", verificarFibonacci);

function verificarFibonacci() {
	const numero = parseInt(document.getElementById("numeroFibonacci").value);

	if (isNaN(numero) || numero < 0) {
		resultadoFibonacci.innerHTML = `<p>Por favor, insira um número inteiro positivo.</p>`;
		return;
	}

	if (numero === 0 || numero === 1) {
		resultadoFibonacci.innerHTML = `<p>O número <b>${numero}</b> pertence à sequência de Fibonacci.</p>`;
		return;
	}

	let a = 0;
	let b = 1;
	while (b < numero) {
		let c = a + b;
		a = b;
		b = c;
	}

	if (b === numero) {
		resultadoFibonacci.innerHTML = `<p>O número <b>${numero}</b> pertence à sequência de Fibonacci.</p>`;
	} else {
		resultadoFibonacci.innerHTML = `<p>O número <b>${numero}</b> não pertence à sequência de Fibonacci.</p>`;
	}
}
