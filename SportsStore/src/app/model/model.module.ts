import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDatasource} from "./static.datasource";
import {Cart} from "./cart.model";
import {Order} from "./order.model";
import {OrderRepository} from "./order.repository";

@NgModule({
  providers: [ProductRepository, StaticDatasource, Cart, Order, OrderRepository]
})

export class ModelModule{}
