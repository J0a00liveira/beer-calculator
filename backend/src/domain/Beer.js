class Beer {
    constructor(name, volume, price, amount) {
        this.name = name;
        this.volume = volume;
        this.price = price;
        this.amount = amount;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (!value || value.trim() === "") {
           throw new Error("Nome é obrigatório");
       }
    
        this._name = value;
    }

    get volume() {
        return this._volume;
    } 

    set volume(value) {
        this._validatePositive(value, "Volume");
        this._volume = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._validatePositive(value, "Preço");
        this._price = value;
    }

    get amount() {
        return this._amount;
    }
    
    set amount(value) {
        this._validatePositive(value, "Quantidade");
        this._amount = value;
    }

    _validatePositive(value, field) {
    if (value <= 0) {
        throw new Error(`${field} deve ser maior que zero`);
    }
}

}

module.exports = Beer;