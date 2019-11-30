export class Card {
    constructor(
        public cardType: string,
        public cardNumber: string,
        public validUpto: string
    ) {
        
    }

    getMaskedCardNumber () {
        return this.cardNumber.replace(/.*(\d{4})/, "**** **** **** $1");
    }
}