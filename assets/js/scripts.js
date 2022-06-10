//quais são as minhas variáveis?
// 1 - respostas
// 2 - perguntas (input)
//dados de entrada?
// perguntas
//dados de saída
// respostas
const inputPergunta = document.querySelector('#input-pergunta');
const elementoResposta = document.querySelector('#resposta');
const buttonPergunta = document.querySelector('#button-pergunta')
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
    "Vou ver e te aviso.",
];

//ao clicar no botão de fazer pergunta
function fazerPergunta() {
    if (inputPergunta.value === ''){
        alert('Digite sua pergunta!');
        return
    }

    buttonPergunta.setAttribute("disabled", true);

    //gera resposta aleatória
    const numeroAleatorio = Math.floor(Math.random() * respostas.length);
    const pergunta = "<div>" + inputPergunta.value + "</div>";
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

    elementoResposta.style.opacity = 1;

    //fazer a resposta desaparecer
    setTimeout(function(){
        elementoResposta.style.opacity = 0;
        buttonPergunta.removeAttribute("disabled")
    }, 3000)

}