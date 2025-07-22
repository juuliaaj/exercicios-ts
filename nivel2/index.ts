class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    obterDetalhes(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro = new Carro("Toyota", "Corolla", 2022);
console.log(carro.obterDetalhes());

class CarroEletrico extends Carro {
    autonomiaBateria: number;

    constructor(marca: string, modelo: string, ano: number, autonomiaBateria: number) {
        super(marca, modelo, ano);
        this.autonomiaBateria = autonomiaBateria;
    }

    obterDetalhes(): string {
        return `${super.obterDetalhes()}, Autonomia: ${this.autonomiaBateria} km`;
    }
}

const carroEletrico = new CarroEletrico("Tesla", "Model 3", 2023, 450);
console.log(carroEletrico.obterDetalhes());
