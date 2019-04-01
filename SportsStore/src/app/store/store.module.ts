import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import {CounterDirective} from "./counter.directive";

@NgModule({
  // imports 告诉angular 该模块依赖以下
  imports: [ModelModule, BrowserModule, FormsModule],
  //declarations告诉angular关于StoreComponent类的属性
  declarations: [StoreComponent, CounterDirective],
  //exports告诉angular StoreComponent也可以用于应用程序的其它部分，
  exports: [StoreComponent]
})

export class StoreModule {}
