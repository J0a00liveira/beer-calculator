class CalculationResult {
    constructor({ totalPrice, totalVolume, pricePerMl }) {
        this._validatePositive(totalPrice, "Preço total");
        this._validatePositive(totalVolume, "Volume total");
        this._validatePositive(pricePerMl, "Preço por ml");

        this._totalPrice = totalPrice;
        this._totalVolume = totalVolume;
        this._pricePerMl = Number(pricePerMl.toFixed(2));
        this._pricePerL = Number((pricePerMl * 1000).toFixed(2));



    }

    get totalPrice() {
        return this._totalPrice;
    }

    get totalVolume() {
        return this._totalVolume;
    }

    get pricePerMl() {
        return this._pricePerMl;
    }

    get pricePerL() {
        return this._pricePerL;
    }

    toObject() {
        return {
            totalPrice: this._totalPrice,
            totalVolume: this._totalVolume,
            pricePerMl: this._pricePerMl,
            pricePerL: this._pricePerL
        };
    }

    _validatePositive(value, field) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error(`${field} deve ser um número maior que zero`);
        }
    }
}

module.exports = CalculationResult;
