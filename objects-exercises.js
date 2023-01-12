// Exercícios
/*  Olá Objeto!
    Escreva o código, uma linha para cada ação:
    Criar um objeto vazio 'user'.
    Adicionar a propriedade 'name' com o valor 'John'.
    Adicionar a propriedade 'surname' com o valor 'Smith'.
    Mudar o valor de 'name' para 'Pete'.
    Remover a propriedade 'name' do objeto.
*/
user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Cheque para vazio
// Escreva a função isEmpty(obj) a qual retorna true se o objeto não tem propriedades, caso contrário false.
function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

// Soma de propriedades do objeto
// Temos um objeto armazenando os salários do nosso time. Escreva código que some todos os salários e armazene na variável soma
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let soma = 0;

if (!isEmpty(salaries)) {
    for (let prop in salaries) {
        soma += salaries[prop];
    }
    console.log(soma);
} else {
    console.log(soma);
}

// Multiplicar propriedades númericas por 2
// Crie uma função multiplyNumeric(obj) que multiplque todas as propriedades numéricas de obj por 2
function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] !== 'number') continue;
        obj[prop] *= 2;
    }
}

