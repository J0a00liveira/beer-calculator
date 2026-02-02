const CalculationResult = require("../domain/CalculationResult");

class ByQuantityStrategy {
    calculate(beer) {
        if (!beer) {
            throw new Error("Beer é obrigatório para cálculo");
        }

        const totalPrice = beer.price * beer.amount;
        const totalVolume = beer.volume * beer.amount;
        const pricePerMl = totalPrice / totalVolume;

        return new CalculationResult({
            totalPrice,
            totalVolume,
            pricePerMl
        });
    }
}

module.exports = ByQuantityStrategy;