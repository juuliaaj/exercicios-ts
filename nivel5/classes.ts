export function logTempoExecucao(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Início do método ${propertyKey}`);
    const inicio = performance.now();

    const resultado = metodoOriginal.apply(this, args);

    const fim = performance.now();
    console.log(`Fim do método ${propertyKey}. Tempo: ${(fim - inicio).toFixed(3)} ms`);

    return resultado;
  };

  return descriptor;
}

export class Carro {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  @logTempoExecucao
  obterDetalhes(): string {
    for (let i = 0; i < 1_000_000; i++) {}  // simula processamento
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }
}

export function retornarPrimeiro<T>(arr: T[]): T {
  return arr[0];
}