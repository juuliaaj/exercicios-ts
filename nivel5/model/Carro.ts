function logTempoExecucao(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const inicio = Date.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = Date.now();

        console.log(`Tempo de execução de ${propertyKey}: ${fim - inicio} ms`);

        return resultado;
    };

    return descriptor;
}

class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    @logTempoExecucao
    obterDetalhes(): object {
        // Loop para acumular tempo de execução
        for (let i = 0; i < 1000000000; i++) {}

        return { marca: this.marca, modelo: this.modelo, ano: this.ano };
    }
}

export default Carro;
