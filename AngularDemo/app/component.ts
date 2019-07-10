import {Component} from "@angular/core";
import {Model} from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})

export class ProductComponent {
    model: Model = new Model();

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
}