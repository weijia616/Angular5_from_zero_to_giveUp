import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDatasource{
  private products: Product[] = [
    new Product(1, "Product 1", "Category 1", "P1 C1", 100),
    new Product(2, "Product 2", "Category 1", "P2 C1", 100),
    new Product(3, "Product 3", "Category 1", "P3 C1", 100),
    new Product(4, "Product 4", "Category 1", "P4 C1", 100),
    new Product(5, "Product 5", "Category 2", "P5 C2", 100),
    new Product(6, "Product 6", "Category 2", "P6 C2", 100),
    new Product(7, "Product 7", "Category 2", "P7 C2", 100),
    new Product(8, "Product 8", "Category 2", "P8 C2", 100),
    new Product(9, "Product 9", "Category 3", "P9 C3", 100),
    new Product(10, "Product 10", "Category 3", "P10 C3", 100),
    new Product(11, "Product 11", "Category 3", "P11 C3", 100),
    new Product(12, "Product 12", "Category 3", "P12 C3", 100),
  ];

  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }
}
