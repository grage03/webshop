import { makeAutoObservable } from "mobx";

export default class PromocodeStore {
    
    constructor() {
        this._promocode = [
            {id: 1, name: 'grage03', discount: 15, activations: 0, productsPurchased: 0},
            {id: 2, name: 'javascript <3', discount: 5, activations: 0, productsPurchased: 0}
        ];

        makeAutoObservable(this);
    }

    setPromocode(value) {
        this._promocode = value;
    }

    get promocode() {
        return this._promocode;
    }
}