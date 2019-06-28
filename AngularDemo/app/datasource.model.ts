import {Product} from "./product.model";


export class SimpleDataSource {
    private data: Product[];

    constructor () {
        this.data = new Array<Product>(
            new Product(1, "p11", 'c1', 100),
            new Product(2, "p12", 'c1', 100),
            new Product(3, "p13", 'c1', 100),
            new Product(4, "p21", 'c2', 200),
            new Product(5, "p22", 'c2', 200),
        )
    }

    getData(): Product[] {
        return this.data;
    }
}