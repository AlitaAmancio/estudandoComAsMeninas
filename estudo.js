// COMANDOS GIT

// pwd - mostra o caminho da pasta atual
// ls - lista todos os arquivos na pasta atual
// cd nome-da-pasta - entra na pasta selecionada
// cd - - volta para a pasta raíz
// cd .. - volta uma pasta para trás
// mkdir nome-da-pasta - cria uma pasta com determinado nome
// rm nome-do-arquivo - remove um arquivo
// rm -r nome-do-repositorio - deleta um repositorio
// whoami - identifica o usuario que está logado
// open/start nome-do-arquivo - abre o arquivo


// HTML (Linguagem de Marcação de HiperTexto)
// CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata)

// NÃO são linguagens de programação pois não podem criar funcionalidades dinâmicas. São linguagens de Marcação (HTML) e Estilização (CSS)

// O Node.js NÃO é uma linguagem de programação, mas, em termos mais acessíveis, é um interpretador JavaScript baseado no motor V8 do google, o mesmo usado no chrome, que permite rodar códigos JavaScript em qualquer servidor, sem a dependência de um navegador

var palavra = "Kiwii";
// let unica = "Melancia";
// const coisada = "Limão";
var numero = 1;
var num = 1.23;
var concatenado = "Sei" + "que" + "nada";
let bobo = true;
let color = `Amigavel${concatenado}`;
let lista = ["favorito", 2, ["Sabado", false], true];
// console.log(lista);
console.log(palavra);
// console.log(unica);
// console.log(coisada);
// console.log(numero);
// console.log(num);
// console.log(concatenado);
// console.log(bobo);
// console.log(color);


// let: variáveis de escopo definido e bloqueado, não podem ser acessadas fora do escopo onde foram definidas, porém podem ser atualizadas
let unica = "Melao";
// var: variáveis de escopo global, podem ser definidas, acessadas e atualizadas em qualquer parte do código
// É altamente recomendável utilizar var apenas em casos onde seja necessário, a boa prática é utilizar let e const para manter suas variáveis no escopo desejado e evitar que sofram mudanças indesejadas
var palavra = "Doce";
console.log(palavra);
// const: são constantes, ou seja variáveis imutáveis, não podem ser atualizadas, além disso, como o caso da let possui escopo definido e bloqueado, não podendo ser acessadas fora do escopo onde foram definidas
const coisada = "Laranja";


// if else
if (numero == num){
    console.log(`numero ${numero} é igual ${num}`);
}else{
    console.log(`numero ${numero} é diferente ${num}`);
};

// operador ternário (condicional)
// condição ? caso verdadeiro : caso falso
(numero == num) ? console.log(`numero ${numero} é igual ${num}`) : console.log(`numero ${numero} é diferente ${num}`);