import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({//decorator  that tells which classes should be used as services for the dependency injection feature,
    providers:[ProductRepository,StaticDataSource]
})
export class ModelModule{}