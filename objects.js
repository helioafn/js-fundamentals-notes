// Um objeto vazio pode ser criado de duas maneiras
let user = new Object(); // sintaxe do construtor object
user = {}; // sintaxe de objeto literal

// Propriedades e literais
// Podemos inserir propriedades no nosso objeto como pares "chave: valor"

user = {
    name: "John",  
    age: 30
};

// A propriedade tem uma chave (conhecida como nome ou identificador) antes de ':' e um valor a sua direita.

/*
    Nosso objeto possui duas propriedades:
        1. A primeira propriedade tem o nome 'name' e o valor 'John'
        2. A segunda propriedade tem o nome 'age' e o valor 30

    Podemos adicionar, remover e adicionar propriedades em qualquer momento.

    Valores de propriedades são acessíveis usando a notação de ponto:
    ex: console.log(user.name, user.age);
*/

// O valor pode ser de qualquer tipo
user.isAdmin = true;

// Para remover uma propriedade, podemos usar o operador 'delete'
delete user.age;

// Pode-se usar propriedades com nomes compostos, mas precisam estar entre aspas
user = {
    name: 'John',
    age: 30,
    "likes birds": true,
};

// Colchetes '[]'
// Acessar propriedades com nomes compostos, a notação de ponto não funciona
// user.likes birds = true; // Erro de sintaxe

// O (.) requer que a chave seja um identificador variável válido. Isso implica: sem espaços, não começa com um dígito
// e não inclui caracteres especiais ($ e _, são permitidos).

// Existe uma "notação de colchetes" alternativa que funciona com qualquer string:
user = {};

// set
user['likes birds'] = true;

// get
user['likes birds']; // true

// delete
delete user['likes birds'];

// Note que a string dentro dos colchetes está entre aspas (qualquer tipo funciona).

// Os colchetes também provém um jeito de obtermos o nome da propriedade como resultado de qualquer expressão,
// invés de somente strings literais
let key = 'likes birds';
user[key] = true;


// Nesse exemplo a variável key pode ser calculada no tempo de execução ou depender do input do usuário.
// Então podemos usar para acessar a propriedade. Isso nos dá grande flexibilidade

user = {
    name: 'John',
    age: 30,
};

key = prompt('What do you want to know about the user?', 'name');

// acessando pela variável
user[key]; // John (se inserir 'name')

// A notação de ponto não pode ser usado de maneira similar
key = 'name';
// user.key // undefined

// Propriedades computadas
// Podemos usar colchetes em um objeto literal, na criação de um objeto, isso é chamado de propriedades computadas
let fruit = prompt('Which fruit to buy?', 'apple');

let bag = {
    [fruit]: 5, // o nome da proprieade é pego da variável fruit
}

bag.apple; // 5 se fruit='apple'

// O significado de uma proprieade computada é simples: [fruit] significa que o nome da propriedade deve ser pego
// de fruit. Logo, se um visitante insere 'apple' no prompt, bag vai se tornar {apple: 5}.

// Essencialmente, funciona da mesma maneira que:
fruit = prompt('Which fruit to buy?', 'apple');
bag = {};

// Pegue o nome da propriedade a partir da variável fruit
bag[fruit] = 5;

// Podemos usar expressões mais complexas dentro dos colchetes
fruit = 'apple';
bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
}

// O colchetes são mais poderosos que a notação de ponto. Eles permitem nomes e variáveis para propriedades. 
// Porém são mais difíceis de escrever. Na maioria do tempo, quando os nomes das propriedades são conhecidas e simples,
// a notação de ponto é usada. Caso precisemos de algo mais complexo, então usamos os colchetes.

/* 
    Abreviação do valor de propriedade: em código real, usamos variáveis existentes como valores para os nomes de
    propriedades.
    Exemplo:
*/
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...outras propriedades
    };
}

user = makeUser('John', 30);
user.name; // John

// O uso de variáveis como uma propriedade é tão comum que possui uma abreviação do valor de propriedade especial. Que o faz mais curto.
// Em vez de name: name, podemos escrever somente name, da seguinte maneira

// function makeUser(name, age) {
//     return {
//         name, // é o mesmo que name: name
//         age, // é o mesmo que age: age
//         // ...
//     }
// }

// podemos usar ambas as propriedades normais e abreviações no mesmo objeto:
user = {
    name,
    age: 30,
};

// Limitações dos nomes de propriedades: como sabemos, uma variável não pode ter nome igual a uma palavra reservada da
// linguagem, como 'for', 'let', 'return' etc. Porém, para uma propriedade de objeto não existe tal restrição
let obj = {
    for: 1,
    let: 2,
    return: 3,
};

// Resumindo, não existem limitações nos nomes de propriedades. Podem ser strings ou symbols 
// (um tipo especial para identificadores). Outros tipos são automaticamente convertidos para strings.
obj = {
    0: "test", // mesmo que "0": "test"
};

// Ambos acessam a mesma proprieade
obj["0"]; // test
obj[0]; // test

// Existe um pequeno porém com a propriedade nomeada '__proto__'. Nos não podemos definir um valor não-objeto para ela.
obj = {};
obj.__proto__ = 5; // Atribui um número
obj.__proto__; // [object Object]: o valor é um objeto, não funcionou como esperado.


/*
    Teste de existencia de propriedade, operador 'in'
    Uma característica notavel dos objetos em JavaScript, é possível acessar qualquer propriedade. Não vão ter erros se
    a propriedade naõ existir! Ler uma propriedade não existente, retorna undefined. 
    Assim podemos facilmente testar se tal propriedade existe.
*/ 
user = {};
user.propriedadeNaoCriada === undefined; // true quer dizer que a propriedade 'propriedadeNaoCriada' não existe.

// Existe o operador 'in' para isso. A sintaxe é: 'key' in object

user = {
    name: 'John',
    age: 30,
};

'age' in user; // true, user.age exists
'blabla' in user; // false, user.blabla doesn't exist

// Note que no lado direito do operador deve ser o nome da propriedade (geralmente uma string), omitido as aspas, 
// significa que a variável deve conter o nome a ser testado, por exemplo:
user = { age: 30, };
key = 'age';
key in user; // true, a propriedade 'age' existe.

// Na maioria dos casos a comparação a comparação com undefined funciona. Mas tem um caso especial que falha, e o operador
// in funciona corretamente. Quando uma propriedade existe, mas armazena undefined.
obj = {
    test: undefined,
};

obj.test; // undefined, então a propriedade não existe?
'test' in obj; // true, a propriedade existe!


// O laço for..in: Para percorrer todas as chaves de um objeto, existe o loop for..in
// A sintaxe:

/*
    for (key in object) { // código }
    Vejamos um exemplo:
*/
user = {
    name: 'John',
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    console.log(key); // name, age, isAdmin

    // valor das chaves
    console.log(user[key]); // John, 30, true
}



