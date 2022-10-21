/* 
    Operadores de comparação
    Conhecemos vários operadores oriundos da matemática.
    Em JavaScript (e em diversas linguagens) eles são escritos assim

    * Maior que/menor que: a > b, a < b.
    * Maior ou igual que/ menor ou igual que: a >= b, a <= b
    * Igualdade: a == b. Note o duplo ==, quando a = b, indica uma atribuição.
    * Diferente: a != b.
*/

// O resultado é booleano (true/false)
// alguns exemplos
let resultado = 2 > 1; // true
resultado = 2 >= 1; // true
resultado = 2 == 1; // false
resultado = 2 != 1; // true

/* 
    Comparação de strings
    Para comparar uma string com outra, JavaScript usa a ordem lexicografica ou dicionário.
    Em outras palavras, strings são comparadas letra a letra.
*/ 
resultado = 'Z' > 'A'; // true
resultado = 'Glow' > 'Glee'; // true
resultado = 'Bee' > 'Be'; // true

// Os códigos Unicode são usados na comparação de strings

// Comparação de tipos diferentes
// Quando estamos comparando tipos diferentes, JavaScript converte os valores para números
resultado = '2' > 1; // true, a string 2 é convertida no número 2
resultado = '01' == 1; // true

// para valores booleanos true é convertido para 1 e false é vira 0
resultado = true == 1; // true
resultado = false == 0; // true

// Igualdade estrita
// a checagem regular de igualdade (==) tem um problema. Não consegue diferenciar 0 de false
resultado = 0 == false; // true

// o mesmo ocorre com uma string vazia
resultado = '' == false; // true

// isso ocorre porque operandos de tipos diferentes são convertidos para números pelo operador de igualdade (==)
// uma string vazia (''), false, viram zero.

// O operador de igualdade estrita (===) checa a igualdade sem conversão de tipo
// em outras palavras, se a e b forem de tipos diferentes, a === b imediatamente retorna false sem uma tentativa de
// converter-los.

resultado = 0 === false; // false (tipos diferentes)

// Também existe o operador de não-igualdade estrita (!==), analogo à (!=).

// Comparação com null e undefined
// no escopo de igualdade estrita (===)
resultado = null === undefined; // false, pois são de tipos diferentes

// em uma igualdade 'regular' (==)
resultado = null == undefined; // true, aqui eles são iguais no escopo do (==), mas diferente de qualquer outro valor.

// matemática e outras comparações (<, >, >=, <=)
// null e undefined são convertidos para números: null vira 0, enquanto undefined vira NaN.

// Alguns exemplos de coisas que acontecem quando aplicamos essas regras e o mais importante, como não cair em armadilhas
// com elas.

// resultado estranho: null vs 0
resultado = null > 0; // false
resultado = null == 0; // false
resultado = null >= 0; // true

/* 
    A razão do porque isso acontece, é por conta de como a igualdade (==) e os comparadores funcionam. Comparações convertem
    null para um número, tratando-o como 0. É por isso que null > 0 é false, e null >= 0 é true.
    Por outro lado, a igualdade é definida para null e undefined de uma maneira que sem quaisquer conversões eles são iguais entre si,
    e diferente de qualquer outro valor. Por esse motivo null == 0 é false.
*/

// undefined incomparável
// o valor undefined não deve ser comparado a outros valores
resultado = undefined < 0; // false
resultado = undefined > 0; // false
resultado = undefined == 0; // false

/*
    As duas primeiras comparações retornam false porque undefined é convertido para NaN e o mesmo é um valor numérico especial que
    retorna false para todas as comparações
    A igualdade (==) retorna false, pois undefined só é igual a null e undefined e nenhum outro valor.
*/

/*
    Resumo 
        * Operadores de comparação retornam um valor booleano
        * Strings são comparadas letra a letra na ordem de 'dicionário'  
        * Quando valores de tipos diferentes são comparados, eles são convertidos para números (com exceção da igualdade estrita)
        * Os valores null e undefined são iguais (==) somente a eles mesmo e nenhum outro valor
        * Cuidado enquanto usa comparadores como > ou < com variáveis que possam ter valor null/undefined. Checar por null/undefined 
        separadamente é uma boa ideia.
*/