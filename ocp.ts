// Open-close principle

interface IPaymentProcessor {
    processPayment(amount: number): void;
}

class PaymentProcessor {
    processor: IPaymentProcessor;

    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor;
    }

    processPayment(amount: number) {
        this.processor.processPayment(amount);
    }
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PaypalProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing paypal payment of ${amount}`);
    }
}

const creditCardProcessor = new CreditCardProcessor();
const paypalProcessor = new PaypalProcessor();
const processor = new PaymentProcessor(paypalProcessor);
processor.processPayment(100);
