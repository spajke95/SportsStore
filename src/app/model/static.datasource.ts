import {Injectable}from "@angular/core";
import { Product } from "./product.model";
import { Observable,from ,of} from "rxjs";
import { Order } from "./order.model";

@Injectable()//this decorator is used to tell that class is service
export class StaticDataSource{
    auth_token?:string;
    private locator=(p:Product,id:number|any)=>p.id==id;
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
    private orders:Order []=[];
    getProducts():Observable<Product[]>{
        return from([this.products]);
    }

    getProduct(id:number):Product|undefined{
        return this.products.find(p=>this.locator(p,id))
    }

    authenticate(username:string,password:string):Observable<boolean>{
        this.auth_token=String(Math.random());
        return of(username=="admin"&&password=="secret");
    }

    saveOrder(order:Order){
       this.orders.push(order);
        return from(this.orders);
    }
    getOrders():Observable<Order[]>{
        return from([this.orders]);
    }

    deleteOrder(id:number):Observable<Order>{
        let index=this.orders.findIndex(o=>o.id==id);
        this.orders.splice(index,1);
        return from(this.orders);
    }

    updateOrder(order:Order):Observable<Order>{
        let index=this.orders.findIndex(o=>o.id==order.id);
        this.orders.splice(index,1,order);
        return from(this.orders);
    }

    saveProduct(product:Product):Observable<Product>{
        if(product.id==0||product.id==null){
            console.log("in static data source  saveProduct method");
            product.id=this.generateID();
             this.products.push(product);
             console.log("product name :"+product.name+" length " +this.products.length);
        }else{
            let index=this.products.findIndex(p=>this.locator(p,product.id));
            console.log("Index : "+index);
            this.products.splice(index,1,product);
        }
        return from(this.products);       
    }

    deleteProduct(id:number){
        let index=this.products.findIndex(p=>this.locator(p,id));
        if(index >-1){
            console.log("index "+index);
            this.products.splice(index,1);
        }
        return from([this.products])
    }
    
    private generateID():number{
        let candidate=100;
        while(this.getProduct(candidate)!=null){
            candidate++;
            console.log("in while loop"+ candidate);
        }
        return candidate;
    }
}