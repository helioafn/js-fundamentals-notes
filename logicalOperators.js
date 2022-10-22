/* 
    Operadores lógicos
    Existem 4 operadores lógicos em JavaScript
    (||) ou lógico
    (&&) e lógico
    (!) não lógico
    (??) operador de coalescência nula (adicionarei mais informações futuramente)
    Apesar de se chamarem 'lógicos', eles podem ser aplicados a valores de qualquer tipo, não só booleanos.
    E seu resultado também pode ser de qualquer tipo.
*/

/* 
    (||) OR
    Na programação clássica, o OU lógico é usado somente para manipular valores booleanos. 
    Se quaisquer um de seus argumentos for true, retorna true, caso contrário retorna false.
    Em JavaScript, o operador é um pouco mais complicado e também mais poderoso. Mas vamos ver o que acontece com valores booleanos.
*/
let resultado = true || true; // true
resultado = false || true; // true
resultado = true || false; // true
resultado = false || false; // false

/*
    Valores falsy (que são convertidos para false em testes booleanos):
    false, undefined, null, 0, NaN, '' (string vazia).
    Valores truthy: quaisquer outros valores que não os anteriores.
*/

// Se um operando não é um booleano, ele é convertido para um para o cálculo.
// lembrar que o número 1 é tratado como true, e o número 0 como false
if (1 || 0) {
    alert('truthy!');
}

// Na maioria das vezes, || é usado em um if para testar se uma das condições é true
let hour = 9;
if (hour < 10 || hour > 18) {
    alert('The office is closed');
}

// Podemos passar mais condições
hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    alert('The office is closed.'); // é final de semana
}

/* 
    OR (||) procura o primeiro valor truthy (valor que é convertido para verdadeiro)
    caracteristicas do OR no JavaScript
    Calcula operandos da esquerda para direita, para cada operando, converte-o para booleano. Se o resultado for true,
    para e retorna o valor original daquele operando (antes da conversão).
    Se todos os operandos foram calculados (todos forem falsos), retorna o último operando.
*/
resultado = 1 || 0; // 1
resultado = null || 1; // 1
resultado = null || 0 || 1; // 1
resultado = undefined || null || 0; // 0 

/* Cálculo 'curto-circuito'
    outra característica do OR (||) é o cálculo curto-circuito
    Significa que || processa os argumentos até o primeiro valor truthy ser encontrado e o valor é retornado imediatamente,
    sem nem tocar nos outros argumentos.
    A importância dessa feature fica mais óbvio quando o operando não é só um valor, mas uma expressão com um efeito colateral
    como uma atribuição de variável ou chamada de função.
*/
true || alert('not printed'); // aqui o operador para imediatamente no true, então o alert() não é executado
false || alert('printed'); // aqui a função é executada, pois o operador vê o false.

// Algumas vezes, essa característica é usada para executar comandos, somente se a condição na esquerda é falsy (valor que é convertido
// para false)

/* 
    AND (&&)
    Na programação clássica, AND retorna true somente e somente se ambos os operadores forem truthy, caso contrário retorna false
*/
resultado = true && true; // true
resultado = false && true; // false
resultado = true && false; // false
resultado = false && false; // false

// exemplo com if 
hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
    alert('The time is 12:30');
}

// assim como acontece com o OR, qualquer valor é permitido como operando de AND
if (1 && 0) { // calculado como true && false
    alert("won't work, because the result is falsy");
}

/*
    AND (&&) procura o primeiro valor falsy
    Dados múltiplos operandos
    O operador (&&) faz o seguinte
    Calcula operandos da esquerda para a direita
    Para cada operando, converte em booleano. Se o resultado for false, para e retorna o valor original do operando (antes da conversão)
    Se todos os operandos forem calculados (todos forem truthy), retorna o último operando
*/
resultado = 1 && 0; // 0
resultado = 1 && 5; // 5
resultado = null && 5; // null
resultado = 0 && 'no matter what'; // 0

// Podemos passar varios valores em sequência, veja como o primeiro falsy/último valor é retornado
resultado = 1 && 2 && null && 3; // null
resultado = 1 && 2 && 3; // 3, o último valor

// A precedência de AND (&&) é maior que OR (||)

/* 
    ! (NOT)
    O operador booleano NOT é representado por (!)
    A sintaxe é bem simples: resultado = !value;
    O operador aceita um único arguemnto e faz o seguinte
    Converte o operando para booleano e retorna o valor inverso
*/
resultado = !true; // false
resultado = !0; // true

if (pass === 'TheMaster') {
// um duplo NOT (!!) as vezes é usado para converter um valor para booleano
resultado = !!'non-empty string'; // true
resultado = !!null;

// O primeiro NOT converte o valor para booleano e retorna o inverso, e o segundo NOT
// inverte de novo. No fim, temos uma conversão valor para booleano.
// Tem uma maneira um pouco mais verbosa de fazer a mesma coisa - a função interna Boolean()
resultado = Boolean('non-empty String'); // true
resultado = Boolean(null); // false

// A precedência de NOT (!) é a maior de todos os operadores lógicos, então sempre executa primeiro
// antes de && ou ||

// Alguns exemplos usando operadores lógicos
// Escreva uma condição que cheque se a idade está entre 14 e 90 (ambos incluso)
let age = 25;
if (age >= 14 && age <= 90) {
    alert('Está no intervalo');
}

// Escreva uma condição que cheque se a idade não está entre 14 e 90 (ambos incluso)
// Crie duas variantes: uma usando o operador (!) e o segundo sem.
if (!(age >= 14 && age <= 90)) {
    alert('Não está no intervalo');
}

// variante sem (!)
if (age < 14 || age > 90) {
    alert('Não está no intervalo');
}

/* 
    Cheque o login
        Escreva um código que peça o login com prompt()
        Se o visitante escrever 'Admin', então peça a senha com prompt(), se o input é vazio ou ESC for pressionado, exiba 'cancelado',
        se for outra string exiba 'Não conheço você'
        A senha é checada da seguinte maneira
        se for igual a 'TheMaster', então exiba 'Bem vindo'
        se for outra string, exiba 'Senha incorreta'
        se for uma string vazia ou input cancelado, exiba 'Cancelado'
*/
let userName = prompt('Quem é você?', '');
if (userName === 'Admin') {

    let password = prompt('Sua senha?', '');

    if (password === 'TheMaster') {
        alert('Bem vindo!');
    } else if (password === '' || password === null) {
        alert('Cancelado');
    } else {
        alert('Senha incorreta');
    }

} else if (userName === '' || userName === null) {
    alert('Cancelled');
} else {
    alert('Não conheço você');
}

// Operador ternário (?)
// condição ? se true executa esse código : se não executa esse código
let isBirthday = true;
const saudacao = isBirthday ? 'Feliz aniversário Sr. Smith - esperamos que tenha um ótimo dia!'
    : 'Bom dia Sr. Smith.';