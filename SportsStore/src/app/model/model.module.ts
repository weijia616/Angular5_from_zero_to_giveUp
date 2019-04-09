import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDatasource} from "./static.datasource";
import {Cart} from "./cart.model";
import {Order} from "./order.model";
import {OrderRepository} from "./order.repository";
import {HttpModule} from "@angular/http";
import {RestDatasource} from "./rest.datasource";

@NgModule({
  imports: [HttpModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
              {provide: StaticDatasource, useClass: RestDatasource}]
})

export class ModelModule{}
