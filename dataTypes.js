// Boolean
// o tipo booleano só tem dois valores: true ou false (pode-se pensar como
// sim ou não)
let nameFieldChecked = true;
let ageFieldChecked = false;

// valores booleanos também aparecem como resultado de comparações
let isGreater = 4 > 1; // true

/*
    O valor null
    o valor especial null não pertence a nenhum dos tipos descritos anteriormente (é um tipo único)
    No JavaScript, null não é uma referência a um objeto não-existente ou um ponteiro nulo como
    em algumas outras linguagens.
    É um valor especial que representa o nada, vazio ou valor desconhecido.
*/
let age = null;

/*
    O valor undefined também é um valor especial e único, assim como null
    O significado de undefined é valor não atribuído
    Se uma variável é declarada, mas um valor não é atribuido a ela, o seu valor é undefined
*/

// Tecnicamente é possível atribuir undefined explicitamente a uma variável, mas não é recomendado que se faça isso
// Normalmente se usa null para atribuir um valor vazio ou desconhecido a uma variável, enquanto undefined é reservado
// como um valor padrão inicial para elementos não atribuidos (inicializados).
age = undefined;

/* 
    Objects e Symbols
    O tipo object é especial
    Todos os outros tipos chamados de primitivos porque os seus valores só podem conter uma única coisa
    (seja uma string, número etc). Em contraste, objetos são usados para armazenar coleções de dados e 
    entidades complexas.

    O tipo symbol é usado para criar identificadores únicos para objetos. Mais detalhes quando for entrado 
    a fundo nos objetos.
*/

/*  
    Operador typeof
    Esse operador retorna o tipo do argumento. É útil quando queremos processar
    diferentemente valores de tipos diferentes ou apenas fazer uma checagem
    rápida.
    Uma chamada a typeof retorna uma string com o nome do tipo
*/
typeof undefined; // 'undefined'
typeof 0; // 'number'
typeof 10n; // 'bigint'
typeof true; // 'boolean'
typeof 'foo'; // string
typeof Symbol('id'); // 'symbol'
typeof Math; // 'object' [1]
typeof null; // 'object' [2]
typeof alert; // 'function' [3]

/*
    [1] Math é um objeto próprio da linguagem que provê operações matemáticas
    [2] Esse é um erro reconhecido em typeof, vindo dos primórdios do JavaScript e mantido por compatibilidade
    Definitivamente null não é um objeto, é um tipo em si. Aqui o comportamento de typeof está errado.
    [3] O resultado é function, porque alert é uma função. Não existe um tipo especial function, function pertencem ao
    tipo object. Mas typeof as tratam diferentemente, retornando 'function'. Tal comportamento também vem dos primórdios
    do JavaScript. Tal comportamento não está correto, mas na prática pode ser conveniente.
*/

/*
    Resumo sobre os tipos basicos em JavaScript
    Sete tipos de dados primitivos:
        * number: Quaisquer tipos de numeros, sejam inteiros ou ponto-flutuantes, inteiros são limitados a +- 2^53 -1.
        * bigint: Para inteiros de tamanho arbitrário (ler mais sobre aritimética de precisão arbitrária).
        * string: Para strings. Uma string pode ter zero ou mais caracteres, não existe o tipo char (caracteres únicos).
        * boolean: valores true/false.
        * null: para valores desconhecidos - um tipo que possui somente o valor null
        * undefined: para valores não-atribuidos (ou inicializados, no caso de variáveis) - um tipo que possui somente o valor undefined
        * symbol: para identificadores únicos
    E um tipo de dado não-primitivo:
        * object: para estruturas de dados mais complexas.
*/