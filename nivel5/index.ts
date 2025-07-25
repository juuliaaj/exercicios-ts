// Função genérica
function retornarPrimeiro<T>(arr: T[]): T {
    return arr[0];
}

// Teste com números
const numeros = [1, 2, 3];
console.log(retornarPrimeiro(numeros)); // Saída esperada: 1

// Teste com strings
const palavras = ['a', 'b', 'c'];
console.log(retornarPrimeiro(palavras)); // Saída esperada: 'a'
