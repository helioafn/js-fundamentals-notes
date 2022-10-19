/*
    JavaScript só possui um tipo de número (Number)
    Números podem ser escritos com ou sem os decimais
    Number em JavaScript são Float 64bits (Double precision)
*/

let x = 3.14;
let y = 3;

// números muito grandes ou muito pequenos podem ser escritos usando a notação científica
x = 123e5; // 12300000
y = 123e-5; // 0.00123

// Inteiros são precisos até 15 dígitos
x = 999999999999999; // 999999999999999
y = 9999999999999999; // 10000000000000000

// o número máximo de decimais é 17 (sem perder a precisão)
// Aritimética com ponto flutuantes nem sempre é 100% precisa
x = 0.2 + 0.1; // 0.30000000000000004

// para 'solucionar' o problema acima, multiplicar e dividir podem ajudar
x = (0.2 * 10 + 0.1 * 10) / 10; // 0.3

/* 
    Adicionando números e strings
    JavaScript usa o operador + tanto para adição quanto concatenação
    Números são adicionados, strings são concateadas.
*/

// se você adicionar duas strings, o resultado será uma concatenação de strings
x = '10';
y = '20'; // 1020
let z = x + y;

// se você adicionar uma string e um número, o resultado é uma concatenação de strings (o oposto também é válido)
x = 10;
y = '20';
z = x + y; // 1020

// um erro comum usando strings e numeros (pode ser contornado usando parenteses nas expressões com números)
x = 10;
y = 20;
z = 'The result is: ' + x + y; // The result is: 1020
z = 'The result is: ' + (x + y) // The result is: 30

/*
    O interpretador JavaScript trabalha da esquerda para a direita
    Primeiro 10 + 20 são adicionados porque ambos x e y são números
    Então 30 + '30' são concatenados porque z é uma string
*/
x = 10;
y = 20;
z = '30';
let result = x + y + z; // 3030

/*
    String numéricas
    Strings podem ter conteúdo numérico
    JavaScript vai tentar converter strings para números em todas as operações aritiméticas
    (exceto adição por conta do operador +)
    Veja alguns exemplos abaixo
*/
x = '100';
y = '10';
z = x / y; // 10
z = x * y; // 1000
z = x - y; // 90
z = x + y; // 10010

/* 
    NaN - Not a Number
    NaN é uma palavra reservada do JavaScript indicando que um número não é um número válido
    Tentar fazer aritimética com uma string não númerica resulta em NaN
*/
x = 100 / 'Apple'; // NaN

// função global do JavaScript isNaN(x) verifica se o valor de x é um NaN
isNaN(x) // true

// Cuidado com NaN. Se usado em uma operação matemática, o resultado é NaN
x = NaN;
y = 5;
z = x + y; // NaN
isNaN(z); // true

// ou ainda o resultado pode ser uma concatenação
x = NaN;
y = '5';
z = x + y; // NaN5

typeof NaN // NaN é um número. typeof NaN retorna number

/*
    Infinity
    Infinity (ou -Infinity) é o valor que JavaScript vai retornar se você calcular o número
    fora do maior número possível
*/
let myNum = 100;
while (myNum != Infinity) { myNum *= myNum; }

// Divisão por zero também gera Infinity
x = 2 / 0;
y = -2 / 0;

typeof Infinity; // number

/*
    Hexadecimal
    JavaScript interpeta constantes númericas como hexadecimal se elas forem precedidas por 0x
*/
x = 0xFF; // 255

// Nunca escreva números com o zero no começo (ex.: 09)
// Algumas versões do JavaScript interpretam números como octal(base 8) se eles tiverem o zero no inicio

/*
    Por padrão, JavaScript exibe os números como decimais de base 10
    Mas você pode usar o método toString() para exibir números de base 2 até base 36.
    Hexadecimal é base 16. Decimal é base 10. Octal é base 8. Binário é base 2.
*/
myNum = 32;
myNum.toString(2); // 100000 em binário


/*
    Números como objetos em JavaScript
    Normalmente números em JavaScript são valores primitivos criados a partir de literais
    Mas números podem ser definidos como a palavra-chave new
*/
x = 123;
y = new Number(123);
// Quando o operador == é usado, x e y são iguais.
// Porém quando o operador === é usado, x e y não são iguais
x == y; // true
x === y; // false


/* 
    Não crie objetos Number
    A palavra-chave new complica o código e diminui a velocidade de execução
    Objetos Number podem produzir resultados inesperados
*/

// Comparar dois objetos em JavaScript SEMPRE retorna false
x = new Number(777);
y = new Number(777);
x == y; // false
x === y; // false