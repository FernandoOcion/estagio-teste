const btnContar = document.getElementById("btnContar");
const resultadoContagem = document.getElementById("resultadoContagem");

btnContar.addEventListener("click", contarA);

function contarA() {
	const texto = document.getElementById("textoContagem").value;
	let contagemMinusculo = 0;
	let contagemMaiusculo = 0;

	for (let i = 0; i < texto.length; i++) {
		if (texto[i] === "a") {
			contagemMinusculo++;
		} else if (texto[i] === "A") {
			contagemMaiusculo++;
		}
	}

	resultadoContagem.innerHTML = `
    <p>A letra "a" minúscula aparece <b>${contagemMinusculo}</b> vezes no texto.</p>
    <p>A letra "A" maiúscula aparece <b>${contagemMaiusculo}</b> vezes no texto.</p>
  `;
}
