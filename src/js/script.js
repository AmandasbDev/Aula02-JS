//DECLRAÇÕES

let nome = "Fiap";
const idade = 30;
let altura = 1.75;
let estudante = true 

console.log(typeof nome);
console.log(typeof altura);
console.log(typeof idade);
console.log(typeof estudante); 

//MÉTODOS DE EXIBIÇÃO
alert("Bem vindo ao sistema");

//`` ${} = contatenação 
//let nomeUsuario = prompt("Qual é o nome do usuário")
//console.log(`Olá, ${nomeUsuario}`)

//let deseejaContinuar = confirm("Deseja relmente continuar?")
//console.log("Resposta", desejaCotinuar)

//Operadores Aritiméticos, comparação e lógico

let soma = 10 + 5; 
console.log(soma)
let multiplicacao = 4*2;
console.log(multiplicacao)
let subtracao = 10-5;
console.log(subtracao)
let resto = 10 % 3; 
console.log(resto)
let divisao = 5/3; 
console.log(divisao)

//Comparação
let a = 10;
let b = "10"; 

// = aribuir 
// == compara o valor 
// === compara o valor e o tipo da variável
console.log (a == b); 
console.log (a === b);
console.log (a > b);
console.log (a >= b); 
console.log (a != b); //diferente 
console.log (a < 10);
console.log (b < a && a > b) //operador and (as duas perisam ser verdadeiras)
console.log(a>20 || b>=a) // || OU - uma das operações tem que ser verdadeira 

let temIdade = 18; 
let habilitacao = true; 

let dirigir =(temIdade >= 18) && habilitacao;
console.log("O usuário pode dirigir?", dirigir);

//Estrutura condicional 

if(true){
    console.log("É verdadeiro")
}

if(true) {
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}