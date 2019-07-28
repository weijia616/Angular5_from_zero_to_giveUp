import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})

export class ProductComponent {
    model: Model = new Model();

    getKey(index: number, product: Product) {
        return product.id;
    }

    getClasses(): string {
        return this.model.getProducts().length == 5
            ? "bg-success" : "bg-warning";
    }

    getClassMap(id: number): Object
    {
        let product = this.model.getProduct(id);
        return {
            "text-xs-center bg-danger": product.name.length > 1,
            "bg-info": product.price > 100
        }
    }

    getProduct(id: number): Product
    {
        return this.model.getProduct(id);
    }

    getProducts(): Product[]
    {
        return this.model.getProducts();
    }

    getProductCount(): number
    {
        return this.getProducts().length;
    }

    selectedProductName: string;
    isSelected(product: Product): boolean
    {
        return this.selectedProductName == product.name;
    }


    newProduct: Product = new Product();
    get jsonNewProduct() {
        return JSON.stringify(this.newProduct);
    }

    displayNewProduct(p: Product) {
        console.log("new product" + this.jsonNewProduct);
    }
}