/* javascript - 20 - 10 - 2018 */


var tabela = document.querySelector(".tabela-aluno");
console.log(tabela);

var alunos = document.querySelectorAll(".aluno");
console.log(alunos);
console.log(alunos.length);

for (var i = 0; i < alunos.length; i++){
	var aluno = alunos[i];
	var nome = aluno.querySelector(".td-nome").textContent;
	var n1 = aluno.querySelector(".td-n1").textContent;
	var n2 = aluno.querySelector(".td-n2").textContent;
	var n3 = aluno.querySelector(".td-n3").textContent;
	
	var media =calcularMedia(n1, n2, n3);

var tdMedia = aluno.querySelector(".td-media");
	tdMedia.textContent = media.toFixed(2);

var tdSituacao = aluno.querySelector(".td-situacao");
	tdSituacao.textContent = definirSituacao(media)[0];
	tdSituacao.classList.add(definirSituacao(media)[1]);

}

var botao = document.querySelector("#adicionar-aluno");

	botao.addEventListener("click",function(){
	event.preventDefault();
	var formulario = document.querySelector("#form-aluno");
    var nome = formulario.querySelector("#txt-nome");
	var nota1 = formulario.querySelector("#txt-n1");
	var nota2 = formulario.querySelector("#txt-n2");
	var nota3 = formulario.querySelector("#txt-n3");
	
	//***CRIAÇÃO DA LINHA DA TABELA
	var alunoTr = document.createElement("tr");
	
	// *** CRIAÇÃO DAS CÉLULAS DA LINHA
	var nomeTd = document.createElement("td");
	var n1Td = document.createElement("td");
	var n2Td = document.createElement("td");
	var n3Td = document.createElement("td");
	var mediaTd = document.createElement("td");
	var situacaoTd = document.createElement("td");
	
	//*** ATRIBUIR OS VALORES DA CÉLULAS
	nomeTd.textContent = nome.value;
	n1Td.textContent = nota1.value;
	n2Td.textContent = nota2.value;
	n3Td.textContent = nota3.value;
	
	var mediaAluno= calcularMedia(nota1.value, nota2.value, nota3.value);
	
	mediaTd.textContent = mediaAluno.toFixed(2);
	situacaoTd.textContent =  definirSituacao(nota1, nota2, nota3)[0];
	situacaoTd.classList.add(definirSituacao(mediaAluno)[1]);
	
	//*** INSERIR CELULAS NA TR 
	alunoTr.appendChild(nomeTd);
	alunoTr.appendChild(n1Td);
	alunoTr.appendChild(n2Td);
	alunoTr.appendChild(n3Td);
	alunoTr.appendChild(mediaTd);
	alunoTr.appendChild(situacaoTd);
	
	var tabela = document.querySelector("#tabela-aluno");
	tabela.appendChild(alunoTr);
	
	});
	
	function calcularMedia(n1, n2, n3){
		return(parseFloat (n1) + parseFloat (n2) + parseFloat (n3))/3.
	}
	
	function definirSituacao(mediaAluno){
	var resultado = [];
	
		if (mediaAluno < 5){
			resultado.push("REPROVADO");
			resultado.push("reprovado");
}
else {
			resultado.push("APROVADO");
			resultado.push("aprovado");
}
			return resultado; 
	}