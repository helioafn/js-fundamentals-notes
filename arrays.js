// Arrays: É uma variável especial, que nos permite armazenar mais de um valor.

// Criando um array: usar um array literal é a maneira mais fácil de criar um array no JavaScript
let veiculos = ['Pop 110i', 'XRE 190', 'Bros 190'];

// Espaços e quebra de linhas não são importantes, um array pode ser declarado da seguinte maneira
veiculos = [
    'Pop 110i',
    'XRE 190',
    'Bros 190'
];

// Pode-se também criar um array e então prover os elementos
const thingsIWantToBuy = []; // Array vazio
thingsIWantToBuy[0] = 'RTX 3050';
thingsIWantToBuy[1] = 'Monitor Ultrawide curvo';
thingsIWantToBuy[2] = 'Uma motocicleta';

// * A contagem dos elementos de um array começa em zero. *

// Criando um array usando a palavra-chave 'new'
const fruits = new Array('Banana', 'Apple', 'Mango');

// Não tem necessidade de usar 'new Array()',
// pela simplicidade, legibilidade e velocidade de execução, use o array literal

/* 
    Acessando elementos do array:
    Você pode acessar um elemento do array referenciando o número do índice
*/
let monitor = thingsIWantToBuy[1];

// Mudando um elemento do array
fruits[0] = 'Maracujá';


// Acessando o array inteiro
// Com JavaScript o array inteiro pode ser acessado ao referenciar o nome do array.
document.getElementById('demo').innerHTML = veiculos;

// Arrays são um tipo especial de objetos. Mas arrays no JavaScript são melhor descritos como arrays.
// Arrays usam números para acessar os seus 'elementos'. Objetos usam nomes para acessars seus 'membros'
const person = ['John', 'Doe', 46];
person[0]; // 'John'

const objectPerson = {
    firstName: 'John',
    lastName: 'Doe',
    age: 46,
};
lastname = objectPerson.lastName; // 'Doe'
const sayHey = () => console.log("Hey!");
// Elementos do array podem ser objetos
// Variáveis no JavaScript podem ser objetos, por conta disso você pode ter diferentes tipos no mesmo Array
// Em um Array você pode ter objetos, funções e arrays.
const arrayOfArrays = [
    veiculos,
    fruits,
    thingsIWantToBuy,
    objectPerson,
    sayHey
];

// Métodos e propriedades do Array
// O ponto forte do array no JavaScript são seus métodos e propriedades 'built-in'

// Propriedade Array.length: retorna o tamanho do array (número de elementos do array).
let arraySize = arrayOfArrays.length; // 5

// Acessando o primeiro item de um array
let fruit = fruits[0];

// Acessando o último item de um array
let lastFruit = fruits[fruits.length - 1];

// Percorrendo elementos de um array
// Uma maneira pode ser usando um laço 'for'
let tamanhoDaGaragem = veiculos.length;
let text = '<ul>';

for (let i = 0; i < tamanhoDaGaragem; i++) {
    text += `<li>${fruits[i]}</li>`;
}

text += '</ul>';

console.log(text);

// Outra maneira usando o método Array.forEach()
text = '<ul>';
fruits.forEach(
    (value) => text += `<li>${value}</li>`
);
text += '</ul>';

console.log(text);

// Adicionando elementos a um Array
// A maneira mais fácil de adicionar um novo elemento a um array é usando o método Array.push(elementoNovo)
fruits.push('Abacaxi');

// Um novo elemento também pode ser adicionado usando a propriedade Array.length
fruits[fruits.length] = 'Uva';

// !! Adicionar elementos com índices muito grandes pode criar 'buracos' com undefined no array
fruits[10] = 'Melão';

for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]); // Do índice 5 ao 9, exibe undefined no console.
}


/* 
    Arrays associativos
    Várias linguagens de programação suportam arrays com índices nomeados.
    Arrays com índices nomeados são chamados de arrays associativos (ou hashes).
    JavaScript não suporta arrays com índices nomeados.
    No JavaScript arrays sempre usam índices numerados.


    !! Se usar índices nomeados, o JavaScript vai redifinir o array para um objeto.
    Depois disso, alguns métodos e propriedades de Array vão produzir resultados incorretos.
*/

const newPerson = [];
newPerson["firstName"] = 'John';
newPerson['lastName'] = 'Doe';
newPerson['age'] = 46;
newPerson.length; // 0
newPerson[0]; // undefined

/* 
    Diferença entre arrays e objetos, quando usar arrays, quando usar objetos:
    No JavaScript, arrays usam índices numerados, objetos usam índices nomeados.
    * Você deve usar objetos quando quiser que o nome dos elementos sejam strings.
    ** Você deve usar arrays quando quiser que o nome dos elementos sejam números.
*/

/*
    JavaScript 'new Array()'
    JS tem um construtor built-in 'new Array()', mas é recomendado que se use '[]'.
    A palavra chave new pode produzir alguns resultados inesperados
*/
let points = new Array(40, 100, 1); // Array de tamanho 3
points = new Array(40, 100); // Array de tamanho 2
points = new Array(40); // Nesse exemplo é criado um array de tamanho 40

// Um erro comum
// points = [40]; é diferente de points = new Array(40);


/*
    Como reconhecer um array: uma pergunta comum pode ser 'como saber se uma variável é um array'?
    O problema é que o operador typeof vai retornar 'object' para um array
*/

// Solução 1: o ECMAScript 5 (ES5 - 2009) definiu um novo método Array.isArray() => retorna um booleano
Array.isArray(points); // true

// Solução 2: O operador 'instanceof' retorna um booleano se um objeto for criado por um dado construtor
points instanceof Array; // true


// Mais métodos de Array

/* 
    Array.toString() => converte um array para uma string (separada por vírgula) dos elementos do array.
    Array.join(separador) => similar a toString(), porém permite especificar um separador.
    Array.pop() => remove o último elemento do array e retorna o valor do elemento removido.
    Array.push(elemento) => adiciona um elemento ao final do array e retorna o novo tamanho do array.
    Array.shift() => remove o primeiro elemento do array, 'move' todos os outros elementos para um índice abaixo
    (para a esquerda) e retorna o valor removido.
    Array.unshift() => adiciona um item no inicio do array, 'move' todos os elementos um índice acima (para a direita)
    e retorna o novo tamanho do array.
    
    Usando o operador delete => delete fruits[0];
    !! Cuidado a se tomar quando usar delete é que ele deixa 'buracos' undefined no array,
    em vez disso use pop() ou shift().

    Combinando (merging) arrays
    points.concat(array1, ..., arrayN) => retorna um novo array juntando os elementos de points
    com o array1 até arrayN.

    Fatiando e juntando (splicing and slicing) arrays
    Array.splice(indiceOndeInserir, numElementosARemover, ...elementosAAdicionar) =>
    O primeiro parâmetro indica onde inserir os novos elementos no array.
    O segundo parâmetro indica quantos elementos devem ser removidos.
    Os parâmetros seguintes definem os elementos a serem adicionados.

    splice() também pode ser usado para remover elementos:
        fruits.splice(0, 1);
    O argumento de valor zero indica onde vai ser 'adicionado', o argumento de valor 1 indica quantos 
    elementos vão ser removidos e não estamos adicionado nenhum elemento, logo remove 
    o elemento sem deixar 'buracos' undefined no array.

    Array.slice(indiceInicial, indiceFinal) => retorna um novo array com os elementos de indiceInicial até
    indiceFinal (não incluso).
    Se o indiceFinal for omitido, slice() fatia o resto do array.

    toString() automático: JavaScript automaticamente converte um array para uma string separada por vírgula
    quando um valor primitivo é esperado. Esse é o caso quando se tenta imprimir um array.
    console.log(fruits); // ['Maracujá', 'Apple', 'Mango', 'Abacaxi', 'Uva', 'Melão']

    !! Todos os objetos JavaScript tem um método toString().
*/




