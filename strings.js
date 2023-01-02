// Strings
// Strings são textos, para não gerar nenhum erro, precisam estar entre aspas simples ou duplas.
let text = 'The revolution will not be televised';

// As strings abaixo geram erros
// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

// Escapando caracteres  (procurar por Escaping sequences para ler mais sobre)
const bigmouth = 'I\'ve got no right to take my place...';

/*
    Concatenando Strings
    Concatenar significa juntar. Para juntar strings no JavaScript, se pode usar
    um tipo diferente de string, chamada de 'template literal'

    Um template literal parece uma string comum, mas invés de usar aspas simples ou duplas ('' ou "")
    se usa apóstrofos (``)
*/
let greeting = `Hello!`;

// Funciona normalmente como uma string, com exceção de que se pode incluir variaveis no template
// usando ${} e o valor da variável vai ser inserido no resultado
const name = 'Hélio';
greeting = `Hello, ${name}!`; // 'Hello, Hélio!'

// Pode usar a mesma técnica para concatenar duas variáveis
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`; // 'Hello, how are you?

// Incluindo expressões em Strings
const song = 'Fight the youth';
const score = 9;
const highestScore = 10;
let output = `I like the song ${song}. I gave it a score 
of ${ (score / highestScore) * 100 }%.`;

`I like the song Fight the youth. I gave it a score 
of 90%.`

// Template literais respeitam as quebras de linha no código fonte, logo se pode escrever strings
// que se espalham por multiplas linhas
output = `I like the song.
I gave it a score of 90%`;

// Equivalente a string acima teriamos que usar o caractere de quebra de linha (\n) na string
output = 'I like the song.\nI gave it a score of 90%.'; // o output é o mesmo da string acima

/*
    Métodos e propriedades de strings
    Valores primitivos como 'John Doe', não podem ter métodos ou propriedades (porque eles não são objetos).
    Mas em JavaScript, métodos e propriedades também estão disponíveis para valores primitivos, pois JavaScript
    trata valores primitivos como objetos quando está executando métodos e propriedades.
*/

// String.length -> propriedade que retorna o tamanho de uma string
let txt = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
let length = txt.length; // 25

// Extraindo partes de uma string
// Existem 3 métodos para extrair parte de uma string

// String.slice(inicio, fim) [fim não incluso]
txt = 'Apple, Banana, Kiwi';
let part = txt.slice(7, 13); // Banana

// JavaScript conta as posições iniciando do zero
// Se o parâmetro é negativo, a posição é contada do final da string

// Se o segundo parâmetro for omitido, o método vai extrair o restante da string
part = txt.slice(7); // Banana, Kiwi

// ou contando do final
part = txt.slice(-12); // Banana, Kiwi

// String.substring(inicio, fim)
// substr() é similar a slice()
// a diferença é que valores de inicio e fim menores que zero, são tratados como 0 em substring()

part = txt.substring(7, 13); // Banana

// se o segundo parâmetro for omitido, substring() vai extrair o restante da string
part = txt.substring(7); // Banana, Kiwi

// String.replace()
// replace() substitui um valor especificado por outro em uma string
text = 'Please visit Microsoft!';
let newText = text.replace('Microsoft', 'TheOdinProject and W3Schools'); // 'Please visit W3Schools!'

/*
    NOTA
    o método replace() não muda a string na qual é chamada
    replace() retorna uma nova string
    por padrão replace() substitui somente a primeira ocorrência
*/

// por padrão replace() é case-sensitive
newText = text.replace('MICROSOFT', 'W3Schools');

// para substituir case insensitive, use regEx com a flag /i (insensitive)
newText = text.replace(/MICROSOFT/i, 'W3Schools');

// Expressões regulares são escritas sem aspas
// se quiser substituir todas as ocorrências, use expressões regulares (regEx) com a flag /g (global match)
  
// Convertendo uma string para caixa alta e baixa (upper, lower case)
// uma string é convertida para caixa alta usando String.toUpperCase()
let text1 = 'Hello, World!';
let text2 = text1.toUpperCase(); // 'HELLO, WORLD!'

// uma string é convertida para caixa baixa usando String.toLowerCase()
text2 = text1.toLowerCase(); // 'hello, world!'

// String.concat() junta uma ou mais strings
text1 = 'Hello';
text2 = 'World';
let text3 = text1.concat(' ', text2);

// o método concat() pode ser usado invés do operador '+'. As seguintes linhas produzem o mesmo resultado
text = 'Hello' + ' ' + 'World!'; // 'Hello World!'
text = 'Hello'.concat(' ', 'World!'); // 'Hello World!'

/*
    NOTA
    Todos os métodos retornam uma nova string. Eles não modificam a string original.
    Formalmente: Strings são imutáveis. Strings não podem ser mudadas, somente substituidas.
*/

// String.trim()
// o método trim() remove espaços em ambos os lados de uma string
text1 = '       Hello World!      ';
text2 = text1.trim(); // 'Hello World!' 

// A especificação ECMAScript 2019 adicionou os métodos trimStart() e trimEnd() ao JavaScript
// esses métodos são similares a trim(), porém removem espaço somente em um dos lados da string

// String.trimStart() -> remove espaços em branco no inicio de uma string
text2 = text1.trimStart(); // 'Hello World!      '

// String.trimEnd() -> remove espaços em branco no final de uma string
text2 = text1.trimEnd(); // '       Hello World!'


// A especificação ECMAScript 2017 adicionou dois métodos de string ao JavaScript: padStart() e padEnd()
// esses métodos permitem adicionar 'enchimento' no inicio ou no final de uma string
text = '5';
let padded = text.padStart(4,'x'); // xxx5
padded = text.padStart(4,'0'); // 0005

// padStart() é um método de string
// para 'encher' um número é preciso converter o mesmo para string

let numb = 5;
text = numb.toString();
padded = text.padStart(10, '0'); // 0000000005

text = '5';
padded = text.padEnd(4, 'x'); // 5xxx
padded = text.padEnd(4, '0'); // 5000

// padEnd() é um método de string
// para 'encher' um número é preciso converter o mesmo para string

numb = 5;
text = numb.toString();
padded = text.padEnd(4, '0'); // 5000

// Extraindo caracteres de uma string
// string.charAt(indice) -> retorna o caractere no indice especificado
text = 'HELLO WORLD';
let char = text.charAt(0); // H
char = text.charAt(-1); // ''

// string.charCodeAt(indice) -> retorna o código UTF-16 (0 ~ 65535) do caractere no indice especificado
char = text.charCodeAt(0); // 72


// ECMAScript5 (2009) permite acesso a propriedade [] em strings
char = text[0];


/*
    NOTA
    Acesso a propriedade pode ser um pouco imprevísivel
    * Faz parecer que uma string é um array, mas não é.
    * Se nenhum caractere for encontrado, [] retorna undefined, enquanto charAt() retorna uma string vazia
    * É somente-leitura. str[0] = 'A' não gera erros (Mas não funciona!)
*/

// Convertendo uma string para um array
// string.split(separador) -> retorna um array separado pelo separador
text = 'Hello World';
let strArray = text.split(' '); // ['Hello', 'World']

// se o separador for omitido retorna a string inteira em um único indice no array
strArray = text.split() // ['Hello World']

// se o separador for uma string vazia retorna um array com todos os caracteres da string
strArray = text.split(''); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']