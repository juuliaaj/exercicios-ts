var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.obterDetalhes = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano);
    };
    return Carro;
}());
var carro = new Carro("Toyota", "Corolla", 2022);
console.log(carro.obterDetalhes());
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico(marca, modelo, ano, autonomiaBateria) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.autonomiaBateria = autonomiaBateria;
        return _this;
    }
    CarroEletrico.prototype.obterDetalhes = function () {
        return "".concat(_super.prototype.obterDetalhes.call(this), ", Autonomia: ").concat(this.autonomiaBateria, " km");
    };
    return CarroEletrico;
}(Carro));
var carroEletrico = new CarroEletrico("Tesla", "Model 3", 2023, 450);
console.log(carroEletrico.obterDetalhes());
