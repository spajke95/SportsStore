import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckOutComponent } from "./checkOut.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports:[BrowserModule,FormsModule,ModelModule,RouterModule],
    declarations:[StoreComponent,CounterDirective,CartSummaryComponent,
        CartDetailComponent,CheckOutComponent],
    exports:[StoreComponent,CartDetailComponent,CheckOutComponent]
})
export class StoreModule{}