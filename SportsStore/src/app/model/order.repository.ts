import {Injectable, NgModule} from "@angular/core";
import {Order} from "./order.model";
import {StaticDatasource} from "./static.datasource";
import {Observable} from "rxjs";
import {ProductRepository} from "./product.repository";
import {Cart} from "./cart.model";

@Injectable()
export class OrderRepository {
  private orders: Order[] = null;

  constructor(private dataSource: StaticDatasource) {

  }

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}


@NgModule({
  providers: [ProductRepository, StaticDatasource, Cart, Order, OrderRepository]
})

export class ModelModule {

}
