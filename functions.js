/*
    Funções
    Já vimos exemplos de funções, como alert(message), prompt(message, default), confirm(question).
    Mas podemos declaras as nossas próprias funções.
*/

// Function declaration
// para criar uma função podemos usar uma function declaration
// function nomeDaFuncao(parametro1, parametro2, ..., parametroN) { algum código }
function showMessage() {
    console.log('Olá! :)');
}

// invocando (chamando) a função
showMessage();
showMessage();

// esse exemplo mostra claramente um dos principais propósitos das funções: evitar duplicação de código
// se for preciso mudar a mensagem ou como ela é exibida, só precisa ser modificada em um único lugar.

// Variáveis locais
// uma variável declarada dentro de uma função só é visível dentro da mesma
function newMessage() {
    let message = 'Hello, i\'m JavaScript!';
    console.log(message);
}

newMessage();
//console.log(message); // Reference Error

// Variáveis externas
// uma função pode acessar uma variável externa, por exemplo
let username = 'Hélio';
function amazingMessage() {
    let message = 'Hello, ' + username;
    console.log(message);
}

// a função tem acesso total a uma variável externa, podendo modifica-la
function messageChangingExternalVariable() {
    username = 'Kuma';
    let message = 'Hello, ' + username;
    console.log(message);
}
console.log(username); // 'Hélio' antes da chamada da função
messageChangingExternalVariable();
console.log(username); // 'Kuma', valor modificado pela função

// A variável externa é usada somente se não existe uma local
// Se uma variável com o mesmo nome é declarada dentro da função ela 'transpõe' a mais externa
// No código a seguir, a função usa a variável local username. A variável externa é ignorada. 
username = 'John';
function usingLocalVariable() {
    let username = 'Nunes';
    let message = 'Hello, ' + username;
    console.log(message); // 'Hello, Nunes'
}
usingLocalVariable();
console.log(username); // John, sem mudanças, a função não acessou a variável externa

/*
    Variáveis globais
    Variáveis declaradas fora de qualquer função, como username no código acima, são chamadas
    globais
    Essas variáveis são visíveis de qualquer função (ao menos que sejam transpostas por variáveis locais)
    É uma boa prática minimizar o uso das variáveis globais. Código moderno tem poucas ou nenhuma.
    A maioria das variáveis residem dentro das suas funções. Apesar de que podem ser úteiis para armazenar
    dados a nível de projeto.
*/

/*
    Parâmetros
    Podemos passar dados arbitrários usando parâmetros
    No exemplo a função tem dois parâmetros: 'de', 'mensagem'
*/
function deliveringMessage(de, mensagem) {
    console.log(de + ': ' + mensagem);
}
// Os valores dos parâmetros são copiados para as variáveis locais de, mensagem. Então a função as usa.
deliveringMessage('Hélio', 'Oi, meu chapa'); // 'Hélio: Oi, meu chapa'
deliveringMessage('Hélio', 'Hmmmm'); // 'Hélio: Hmmmm'

// Mais um exemplo: nos temos uma variável 'de' e é passada pra função. Note que a função muda 'de',
// mas a mudança não é vista fora da função, pois a função sempre recebe uma cópia do valor.
function showingNicerMessage(de, mensagem) {
    de = '*' + de + '*';
    console.log(de + ': ' + mensagem);
}

let de = 'Ann';
showingNicerMessage(de, 'Olá');
console.log(de); // 'Ann'. O valor de 'de' é o mesmo, pois a função modificou uma cópia local

// Parâmetro é a variável listada na declaração da função
// Argumento é o valor passado na chamada da função

// Valores padrão
// se uma função é chamada, mas um argumento não é fornecido, então o valor correspondente é undefined
// Nossas funções podem ser chamadas com só um argumento.
showingNicerMessage('Hélio'); // '*Hélio*: undefined'
// Isso não é um erro, como um valor para mensagem não foi passado, logo seu valor é undefined
// Podemos especificar um valor padrão (para uso, se tal argumento for omitido) para um parâmetro na 
// declaração da função usando '='.
function showMessageWithDefaultParameter(de, mensagem = 'Nenhum texto foi fornecido') {
    console.log(de + ': ' + mensagem);
}
showMessageWithDefaultParameter('Hélio'); // 'Hélio: Nenhum texto foi fornecido'
// o valor padrão também é usado se o parâmetro existe, mas é estritamente igual a undefined
showMessageWithDefaultParameter('Hélio', undefined); // 'Hélio: Nenhum texto foi fornecido'

// Aqui 'nenhum texto foi fornecido' é uma string, mas pode ser uma expressão mais complexa, a qual só
// é calculada e atribuida ao parâmetro se um parâmetro está faltando. Então o seguinte é possível:
// function messageWithFunctionDefault(de, mensagem = outraFunção()) { // código }

// Valores padrão alternativos
// As vezes faz sentido atribuir valores padrão para parâmetros em um outro estágio depois da declaração
// da função.
// Podemos checar se o parâmetro é passado durante a execução da função, comparando com undefined
function messageWithLaterCheck(mensagem) {
    // ...
    if (mensagem === undefined) { text = 'Mensagem vazia'; }
    console.log(mensagem);
}
messageWithLaterCheck(); // 'Mensagem vazia'

// ou podemos usar o operador (||)
function messageWithLaterCheck(mensagem) {
    // se mensagem for undefined ou em outro momento falsy, defina-a como 'vazio'.
    mensagem = mensagem || 'vazio';
    // ...
}

// Os motores modernos de JavaScript suportam o operador de coalescência nula (??), é melhor quando
// a maioria dos valores falsy, como 0, devem ser consideradas normal.
function showCount(count) {
    // if count é undefined ou null, exibe 'desconhecido'
    console.log(count ?? 'desconhecido');
}

showCount(0); // 0
showCount(null); // 'desconhecido'
showCount(); // 'desconhecido'

// Retornando um valor
// uma função pode retornar um valor ao código que o chamou como resultado
function sum(a, b) {
    return a + b;
}

let resultado = sum(1, 2); // 3
// A diretiva return pode ser usada em qualquer local da função, quando a execução chega nela,
// a função para e o valor é retornado para o código que o chamou
// function checkAge(age) {
//     if (age >= 18 ) {
//         return true;
//     } else {
//         return confirm('Você tem permissão dos seus pais?');
//     }
// }

// let age = prompt('Qual a sua idade?', 18);
// if (checkAge(age)) {
//     console.log('Acesso garantido');
// } else {
//     console.log('Acesso negado');
// }

// É possível usar return sem um valor. Isso causa a saida imediata da função
// function showMovie(age) {
//     if (!checkAge(age)) {
//         return;
//     }

//     console.log('Exibindo o filme');
// }

// Uma função com return vazio ou sem, retorna undefined

/* 
    Nomeando funções
    Funções são ações. Então geralmente seu nome é um verbo. Deve ser curto, o mais preciso possivel
    e descreva o que a função faz, para quem ler o código tem uma indicação do que a função faz.
    É uma prática difundida iniciar uma função com um prefixo verbal que vagamente descreve a ação.
    Deve-se ter um acordo entre o time para o significado dos prefixos
*/

/*  
    Funções iniciando com:
    get... - retorna um valor,
    calc... - calcula algo,
    create... - cria algo,
    check... - checa algo e retorna um booleano, etc.
*/

/*
    Alguns exemplos
    showMessage() // exibe uma mensagem
    getAge() // retorna a idade ('pega' de uma certa maneira)
    calcSum() // calcula a soma e retorna o resultado
    createForm() // cria um formulário (e usualmente o retorna)
    checkPermission() // checa a permissão, retorna true/false
*/

/*
    Uma função - uma ação
    Uma função deve fazer exatamente o que seu nome sugere, nada mais.
    Duas ações independentes geralmente merecem duas funções, mesmo que chamadas juntas (nesse caso
    podemos fazer uma terceira função que chama as duas).
*/

// Funções == comentários
// Funções devem ser curtas e fazer exatamente uma coisa. Se essa coisa é grande, talvez valha a pena
// dividi-lá em funções menores. Nem sempre seguir essa regra é fácil, mas com certeza é algo bom.

/*
    Resumo sobre Funções
    * valores passado para a função como parâmetros são copiadas para as variáveis locais da função.
    * Uma função pode acessar variáveis externas. Mas funciona somente de dentro para fora. Código fora
    da função não vê suas variáveis locais.
    * Uma função pode retornar um valor. Se não retornar, o seu resultado é undefined.
*/

// Function expressions
// Em JavaScript, uma função não é uma estrutura 'mágica' da linguagem, mas um tipo de valor especial
// Existe outra sintaxe para criar uma função que é chamada de Function expression
// Nos permite criar uma nova função no meio de qualquer expressão.
let sayHi = function() {
    console.log('Hello!!');
};

function sayHello() {
    console.log('Helloooo!');
}

// Note que não tem nome depois da palavra-chave function. Omitir o nome é permitido para
// function expressions

// Em situações mais avançadas, uma função pode ser criada e imediatamente ser chamada ou 'agendada' para
// uma execução futura, não armazenada em algum local, mas permanecendo anônima.

// Função é um valor
// Vamos reiterar: não importa como uma função é criada, ela é um valor. Até podemos imprimir seu valor
// usando alert() (ou console.log())
console.log(sayHi); // exibe o corpo da função.
console.log(sayHello); // exibe o corpo da função.

// Em JavaScript uma função é um valor, então podemos lidar como um valor.
let func = sayHello; // copiando a função para func
func = sayHello(); // chamando a função e atribuindo seu valor de retorno para func (nesse caso, undefined)

// Ambas podem ser chamadas como sayHi() e func()

// Continuar de callback functions 
// Atividades
function checkAge(age) {
    return (age > 18) ? true : confirm('Seus pais lhe deram permissão?');
}

function checkAge(age) {
    return (age > 18) || confirm('Seus pais lhe deram permissão?');
}
// let myAge = prompt('Digite a sua idade', '');

// console.log(checkAge(myAge));

function getMinimumValue(a, b) {
    if (a <= b) {
        return a;
    }

    return b;
}

console.log(getMinimumValue(10, 5));

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}