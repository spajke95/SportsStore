import {Injectable}from "@angular/core";
import { Product } from "./product.model";
import { Observable,from } from "rxjs";
import { Order } from "./order.model";

@Injectable()//this decorator is used to tell that class is service
export class StaticDataSource{
    private products:Product[]=[
        new Product(1,"Product 1","category 1","Product 1 (category 1)",100),
        new Product(2,"Product 2","category 1","Product 2 (category 1)",100),
        new Product(3,"Product 3","category 1","Product 3 (category 1)",100),
        new Product(4,"Product 4","category 1","Product 4 (category 1)",100),
        new Product(5,"Product 5","category 2","pRODUCT 5 (Category 2)",100),
        new Product(6,"Product 6","category 2","Product 6 (category 2)",100),
        new Product(7,"Product 7","category 2","Product 7 (category 2)",100),
        new Product(8,"Product 8","category 2","Product 8 (category 2)",100),
        new Product(9,"Product 9","category 3","Product 9 (category 3)",100),
        new Product(10,"Product 10","category 3","Product 10 (category 3)",100),
        new Product(11,"Product 11","category 3","Prodcut 11 (category 3)",100),
        new Product(12,"Product 12","category 3","Product 12 (category 3)",100)
    ];
    getProducts():Observable<Product[]>{
        return from([this.products]);
    }
    saveOrder(order:Order){
        console.log(JSON.stringify(order));
        return from([order]);
    }
}