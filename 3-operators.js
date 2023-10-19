// Operadores aritiméticos
let x = 5;
let y = 2;
let z = x + y; // 7
z = x - y; // 3
z = x * y; // multiplicação
z = x / y; // 2.5
z = x % y; // operador módulo (resto da divisão). Resultado: 1
z = x ** 2; // operador de exponenciação. Resultado: 25
// esse código produz o mesmo resultado da operação anterior
z = Math.pow(x, 2); // 25 x^2

// Operadores de atribuição
z = x; // 5
z++; // incremento + 1 -> equivalente a z = z + 1 ou z += 1. Resultado: 6
z--; // decremento - 1 -> equivalente a z = z - 1 ou z -= 1. Resultado: 4
z += 1; // equivalente a z++. Resultado: 5
z -= 1; // equivalente a z--. Resultado: 4
z *= 2; // equivalente a z = z * 2. Resultado: 8
z /= 2; // equivalente a z = z / 2. Resultado: 4