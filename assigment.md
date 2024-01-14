### Assignment: Enhancing the Invoice Class with Open/Closed Principle

##### Background

In this assignment, you will work with an existing Invoice class. Your task is to refactor this class to adhere to the Open/Closed Principle (OCP), one of the key SOLID design principles in object-oriented programming. This principle states that software entities should be open for extension but closed for modification. In other words, it should be easy to add new features without changing the existing code.

##### Initial Code

The provided Invoice class is designed to generate a simple invoice for given products. It includes a method generateInvoice that outputs an invoice to the console.

```ts
import { Product } from './Order';

export class Invoice {
    generateInvoice(products: Product[], amount: number) {
        console.log(`
Invoice Date: ${new Date().toDateString()}
-------------------------------
Product Name\tPrice
                `);

        products.forEach((product) => {
            console.log(`${product.name}\t\t${product.price}`);
        });
        console.log('-------------------------------');
        console.log(`Total: ${amount}`);
    }
}
```

##### Task

Your task is to refactor the Invoice class so that it adheres to the OCP. Specifically, you should make it possible to extend the invoice generation functionality (e.g., different invoice formats, additional invoice details) without modifying the existing Invoice class.

-   Define an Invoice Strategy Interface: Create an interface or abstract class (e.g., IInvoiceStrategy) that declares a method for generating invoices.
-   Implement Different Invoice Strategies: Create different classes implementing the IInvoiceStrategy interface. For instance, a detailed invoice class, a summarized invoice class, etc.
-   Refactor Invoice Class to Use Invoice Strategy: Modify the Invoice class to accept an IInvoiceStrategy and use it to generate the invoice.
    Requirements

Create at least two different invoice strategies.
Ensure that the Invoice class does not require modification when adding new invoice formats.

Write a brief explanation of how your solution adheres to the OCP.
