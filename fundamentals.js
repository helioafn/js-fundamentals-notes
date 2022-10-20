// Declaraçao de variáveis
// existem três maneiras de declarar variaveis em JavaScript
// let, const e o mais antigo var

// sempre use as duas primeiras, por conta de 'problemas' do var
// escopo de bloco etc (pesquise mais)

// Pode se declarar uma variável sem inicializá-la
let authorName;

// e atribuir um valor a mesma no decorrer do programa
authorName = 'Hélio';

// se usa const para armazenar um valor que não vai mudar durante o programa
const authorBirthday = '21.10.1997';

// existem algumas convenções acerca de nomeação de variáveis (pesquise mais)
// ex.: constantes 'hard-coded' devem ser escritas em maiúsculo, e constantes que vão ser calculadas em tempo de execução
// são nomeadas em camelCase.

// É possível declarar múltiplas variáveis em uma só linha, mas pela legibilidade do código declare uma por linha.
let userName = 'Anonymous', userID = '923923', userIsVerified = false;

// ou ainda declare de uma maneira mais legível (aqui entra questão de estética e convenções da equipe etc)
const userBirthday = '07.09.1765',
    tracked = false;