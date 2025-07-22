let nome: string = "Júlia";
let idade: number = 17;
let ativo: boolean = true;

let hobbies: string[] = ["Ler", "Programar", "Cozinhar"];

let ponto: [number, number] = [10, 20];

console.log(nome, idade, ativo, hobbies, ponto);

function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

const imc = calcularIMC(50, 1.66);
console.log(imc);
console.log(classificarIMC(imc));

interface Pessoa {
    nome: string;
    email?: string;
    idade: number;
}

const pessoa: Pessoa = {
    nome: "Júlia",
    idade: 17,
    email: "juliajardim765@gmail.com",
};

console.log(pessoa);

