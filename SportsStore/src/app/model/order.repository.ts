import {Injectable, NgModule} from "@angular/core";
import {Order} from "./order.model";
import {StaticDatasource} from "./static.datasource";
import {Observable} from "rxjs";
import {ProductRepository} from "./product.repository";
import {Cart} from "./cart.model";
import {RestDataSource} from "./rest.datasource";

@Injectable()
export class OrderRepository {
  private orders: Order[] = null;
  private loaded: boolean = false;

  constructor(private dataSource: RestDataSource) {

  }

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }

    return this.orders;
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order)
      .subscribe(order => {
        this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
      })
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id)
      .subscribe(order => {
        this.orders.splice(this.orders.findIndex(o => id == o.id));
      })
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
