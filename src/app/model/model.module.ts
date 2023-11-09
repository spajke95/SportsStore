import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({//decorator  that tells which classes should be used as services for the dependency injection feature,
    providers:[ProductRepository,StaticDataSource,Cart,Order,OrderRepository]
})
export class ModelModule{}