var nome = "Júlia";
var idade = 17;
var ativo = true;
var hobbies = ["Ler", "Programar", "Cozinhar"];
var ponto = [10, 20];
console.log(nome, idade, ativo, hobbies, ponto);
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function classificarIMC(imc) {
    if (imc < 18.5)
        return "Abaixo do peso";
    if (imc < 25)
        return "Normal";
    if (imc < 30)
        return "Sobrepeso";
    return "Obesidade";
}
var imc = calcularIMC(50, 1.66);
console.log(imc);
console.log(classificarIMC(imc));
var pessoa = {
    nome: "Júlia",
    idade: 17,
    email: "juliajardim765@gmail.com",
};
console.log(pessoa);
