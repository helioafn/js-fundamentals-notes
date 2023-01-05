// Loops são usados para repetir algum trecho de código uma determinada quantidade de vezes
// ou até que uma condição seja atingida. No JavaScript temos diversas opções de loops

const cats = [
    'Leopard',
    'Serval',
    'Jaguar',
    'Tiger',
    'Caracal',
    'Lion'
];


// Percorrendo uma coleção (nos exemplos usarei Array, mas funcionam em Sets e Maps)

/*  
    for..of loop: esse loop funciona da seguinte maneira
    Dado a coleção (cats nesse caso),
    (1): pegue o primeiro item da coleção;
    (2): atribua a variável cat então executa o bloco de código.
    (3): pegue o próximo item, e repita o passo 2 até chegar ao fim da coleção.
*/
for (const cat of cats) {
    console.log(cat);
}

// map() e filter()
// JavaScript possui loops mais especializados para coleções, vamos mencionar dois deles aqui.

// map() => Usado para fazer algo a cada item de uma coleção e criar uma nova coleção a partir desses itens

// Aqui passamos uma arrow function como argumento de map, fazendo que cada item de cat seja convertido para caixa alta.
const upperCats = cats.map((cat) => cat.toUpperCase()); // ['LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION']

// filter() => Usado para criar uma nova coleção somente com os itens que casem com filtro definido.

const filtered = cats.filter((cat) => cat.startsWith('L')); // ['Leopard', 'Lion']

/* 
    Loop for padrão
    A sintaxe do loop for é a seguinte:
    for (inicializador; condição; expressão-final) {
        // algum código
    }
    Vejamos melhor com um exemplo
*/

// const results = document.querySelector('#results');

// function calculate() {
//     for (let i = 1; i < 10; i++) {
//         const newResult = `${i} x ${i} = ${i * i}`;
//         results.textContent += `${newResult}\n`;
//     }
//     results.textContent += '\nFinished';
// }

// const calculateButton = document.querySelector('#calculate');
// const clearButton = document.querySelector('#clear');

// calculateButton.addEventListener('click', calculate);
// clearButton.addEventListener('click', () => results.textContent = '');

// Percorrendo uma coleção com um loop for padrão
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

// Saindo de loops com a declaração 'break'
// Caso você queira sair de um loop antes de completar todas as iterações,
// pode-se usar a declaração 'break'. O que break faz é sair instataneamente do loop
// e continua o fluxo do código.

// No código abaixo, queremos procurar um número pelo nome de contato em uma lista telefônica
const contacts = [
    'Chris:2232322',
    'Sarah:3453456',
    'Bill:7654322',
    'Mary:9998769',
    'Diane:9384975',
    'Helio:9123545'
];

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    para.textContent = '';
    
    for (const contact of contacts) {
        const splitContact = contact.split(':');

        // Caso encontre o nome na lista coloca o texto no paragráfo e sai do loop
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }

    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
});


// Pulando iterações com a declaração 'continue'