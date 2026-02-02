const Beer = require("../domain/Beer");
const Calculator = require("../domain/Calculator");
const ByQuantityStrategy = require("../strategies/ByQuantityStrategy");

class BeerCalculationService {
    constructor() {
        this._calculator = new Calculator(new ByQuantityStrategy());
    }

    calculateByQuantity({ name, volume, price, amount }) {
        const beer = new Beer(name, volume, price, amount);
        return this._calculator.calculate(beer);
    }
}

module.exports = BeerCalculationService;
