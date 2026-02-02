class Calculator {
    constructor(strategy) {
        this._setStrategy(strategy);
    }

    calculate(entity) {
        if (!entity) {
            throw new Error("Entidade para cálculo é obrigatória");
        }

        return this._strategy.calculate(entity);
    }

    _setStrategy(strategy) {
        if (!strategy) {
            throw new Error("Strategy é obrigatória");
        }

        if (typeof strategy.calculate !== "function") {
            throw new Error("Strategy deve implementar o método calculate()");
        }

        this._strategy = strategy;
    }
}

module.exports = Calculator;
