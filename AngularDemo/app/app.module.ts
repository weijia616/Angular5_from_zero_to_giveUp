import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ProductComponent} from "./component";
import {FormsModule} from "@angular/forms";
import {PaAttrDirective} from "./attr.directive";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ProductComponent, PaAttrDirective],
    bootstrap: [ProductComponent]
})

export class AppModule {}