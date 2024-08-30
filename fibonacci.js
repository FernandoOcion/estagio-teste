const btnFibonacci = document.getElementById("btnFibonacci");
const resultadoFibonacci = document.getElementById("resultadoFibonacci");

btnFibonacci.addEventListener("click", verificarFibonacci);

function verificarFibonacci() {
	const numero = parseInt(document.getElementById("numeroFibonacci").value);
	let a = 0;
	let b = 1;
	let achou = false;

	while (b <= numero) {
		if (b === numero) {
			achou = true;
			break;
		}
		let c = a + b;
		a = b;
		b = c;
	}

	if (achou) {
		resultadoFibonacci.innerHTML = `<p>O número <b>${numero}</b> pertence à sequência de Fibonacci.</p>`;
	} else {
		resultadoFibonacci.innerHTML = `<p>O número <b>${numero}</b> não pertence à sequência de Fibonacci.</p>`;
	}
}
