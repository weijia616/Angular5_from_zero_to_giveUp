import {Injectable} from "@angular/core";
import {Http, Request, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {Product} from "./product.model";
import {Order} from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;


@Injectable()
export class RestDatasource {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  private sendRequest(verb: RequestMethod, url: string,
                      body?: Product | Order): Observable<Product[] | Order> {

    return this.http.request(new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    })).map(response => response.json());
  }

  getProducts(): Observable<Product[] | Order> {
    return this.sendRequest(RequestMethod.Get, "products");
  }

  saveOrder(order: Order): Observable<Product[] | Order> {
    return this.sendRequest(RequestMethod.Post, "orders", order);
  }
}
