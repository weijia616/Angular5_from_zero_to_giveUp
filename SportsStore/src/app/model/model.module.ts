import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDatasource} from "./static.datasource";
import {Cart} from "./cart.model";

@NgModule({
  providers: [ProductRepository, Cart]
})

export class ModelModule{}
