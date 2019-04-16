import {Injectable} from "@angular/core";
import {Http, Request, RequestMethod} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Product} from "./product.model";
import {Order} from "./order.model";
import 'rxjs/add/operator/map';

const PROTOCOL = "http";
const PORT = 3500; //based on package.json JSON port number


@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  private sendRequest(verb: RequestMethod, url: string,
                      body?: Product | Order, auth: boolean = false):
    Observable<Product[] | Product | Order[] | Order> {

    let request = new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    });

    if (auth && this.auth_token != null) {
      request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
    }

    return this.http.request(request).map(response => response.json());
  }

  getProducts(): Observable<Product[]> {
    return this.sendRequest(RequestMethod.Get, "products") as Observable<Product[]>;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.sendRequest(RequestMethod.Post, "orders", order) as Observable<Order>;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.request(new Request({
      method: RequestMethod.Post,
      url: this.baseUrl + "login",
      body: {
        name: user,
        password: pass
      }
    })).map(response => {
      let r = response.json();
      this.auth_token = r.success ? r.token : null;
      return r.success;
    })
  }
}
