import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import {CounterDirective} from "./counter.directive";
import {CartSummaryComponent} from "./cartSummary.component";
import {CartDetailComponent} from "./cartDetail.component";
import {CheckoutComponent} from "./checkout.component";
import {RouterModule} from "@angular/router";

@NgModule({
  // imports 告诉angular 该模块依赖以下
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  //declarations告诉angular关于StoreComponent...类的属性
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  //exports告诉angular StoreComponent也可以用于应用程序的其它部分，
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule {}
