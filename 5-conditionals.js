/*  Declaração de condicionais
    JavaScript possui as seguintes declarações condicionais
    if -> para especificar um bloco de código a ser executado,
     se uma condição for verdadeira
    else -> para especificar um bloco de código a ser executado,
     se a mesma condição for falsa
    else if -> para especificar uma nova condição para testar, 
     se a primeira condição for falsa
    switch -> para especifica N blocos de código alternativos a serem executados
*/

// if
let hour = 13;
let greeting = "";

if (hour < 18) {
  greeting = "Good day";
} // greeting now has 'Good day'

// else
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} // greeting has 'Good day'

// else if
if (hour < 10) {
  greeting = "Good morning";
} else if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} // greeting has 'Good morning'
