import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";
import { ConnectionService } from "./connection.service";

@NgModule({//decorator  that tells which classes should be used as services for the dependency injection feature,
    imports:[HttpClientModule]
    ,providers:[ProductRepository,StaticDataSource,Cart,Order,OrderRepository,
    {provide:StaticDataSource,useClass:RestDataSource},RestDataSource,AuthService,ConnectionService]
})
export class ModelModule{}