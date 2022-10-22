/* 
    switch
    a sintaxe básica é similar a um if
    
    switch (expressão) {
        case x:
            executa um bloco de código caso x
            break;
        case y:
            executa um bloco de código caso y
            break;
        default:
            executa um bloco de código padrão caso nenhum dos outros casos
            seja executado (esse pode ser omitido, aqui o break também pode ser omitido).
}

*/

// Define o dia atual para uma variável, com o dia 0 sendo Domingo e 6 sendo sábado.
const day = new Date().getDay();

switch (day) {
	case 0:
		console.log("É domingo, hora de relaxar!");
		break;
	case 1:
		console.log("Feliz Segunda!");
		break;
	case 2:
		console.log("É terça-feira. Você consegue!");
		break;
	case 3:
		console.log("Já é quarta, estamos quase lá!");
		break;
	case 4:
		console.log("Mais um dia até o final de semana!!");
		break;
	case 5:
		console.log("Sextou!!");
		break;
	case 6:
		console.log("Tenha um sábado incrível");
		break;
	default:
		console.log("Aconteceu algo muito errado!");
}

/*
    Intervalos em um switch
    Existem ocasiões que você precisa calcular um intervalo de valores em um bloco switch.
    Podemos fazer isso definindo nossa expressão para true e fazendo uma operação em cada case
*/

const nota = 87;
switch (true) {
    case nota >= 90:
        console.log('A');
        break;
    case nota >= 80:
        console.log('B');
        break;
    case nota >= 70:
        console.log('C');
        break;
    case nota >= 60:
        console.log('D');
        break;
    // qualquer valor abaixo de 59 é reprovado
    default:
        console.log('F');
} // output é 'B'

/*
    A expressão em parênteses é calculada pra true nesse exemplo. Isso significa que
    qualquer case que calcule true vai ser um par.

    Assim como else-if, switch é calculado de cima pra baixo, e o primeiro par true vai
    ser aceito. Mesmo que a variável nota também calcule true para C e D, o primeiro par é B,
    o qual vai ser o output.
*/

/* 
    Multiplos cases
    Você pode encontrar código no qual múltiplos cases têm de possuir o mesmo output.
    Para realizar isso, você pode usar mais de um case para cada bloco de código.
    Para testar isso, vamos fazer uma pequena aplicação que combina o mês atual com a 
    estação do ano.
*/

// esse método vai retornar um número de 0 a 11, sendo 0 = Janeiro e 11 = Dezembro.
const mes = new Date().getMonth();

switch (mes) {
    // janeiro, fevereiro, março
    case 0:
    case 1:
    case 2:
        console.log('Inverno');
        break;
    // abril, maio, junho
    case 3:
    case 4:
    case 5:
        console.log('Primavera');
        break;
    // julho, agosto, setembro
    case 6:
    case 7:
    case 8:
        console.log('Verão');
        break;
    // outubro, novembro, dezembro
    case 9:
    case 10:
    case 11:
        console.log('Outono');
        break;
    default:
        console.log('Alguma coisa muito errada aconteceu :(');
} // O output vai ser 'Outono' (data da escrita desse código)
