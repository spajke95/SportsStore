import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";

@NgModule({//decorator  that tells which classes should be used as services for the dependency injection feature,
    providers:[ProductRepository,StaticDataSource,Cart]
})
export class ModelModule{}