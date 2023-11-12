import { Injectable } from "@angular/core";
import {HttpClient, HttpParams, HttpParamsOptions}from "@angular/common/http";
import { map,Observable } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { HttpHeaders } from "@angular/common/http";

const PROTOCOL="http";
const PORT=3500;

@Injectable()
export class RestDataSource{
    baseUrl:string;
    auth_token?:string;
    httpOptions;

    constructor(private http:HttpClient){
        //this.baseUrl=`${PROTOCOL}://${location.hostname}:${PORT}/`;
       this.baseUrl="https://product-api-8c5q.onrender.com/api/";
     
         this.httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': "*",
              'Referrer-policy': "no-referrer",
            }),
            params: new HttpParams().set('mode',"no-cors")
          };
        
    }

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(
            this.baseUrl+"products",this.httpOptions);
    }

    saveOrder(order:Order):Observable<Order>{
        return this.http.post<Order>(this.baseUrl+"orders",order);
    }

    authenticate(username:string,password:string):Observable<boolean>{
        return this.http.post<any>(this.baseUrl+"login",{name:username,password:password})
        .pipe(map(response=>{
            this.auth_token=response.success ? response.token:null;
            return response.success; 
        }));
    }

    getOptions(){
        return {
            headers:new HttpHeaders({
                Authorization:`Bearer<${this.auth_token}>`
            })
        }
    }

    saveProduct(product:Product):Observable<Product>{
        return this.http.post<Product>(this.baseUrl+"products",product,this.getOptions());
    }

    updateProduct(product:Product):Observable<Product>{
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`
        ,product,this.getOptions());
    }

    deleteProduct(id:number):Observable<Product>{
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`,this.getOptions());
    }

    getOrders():Observable<Order[]>{
        return this.http.get<Order[]>(this.baseUrl+"orders",this.getOptions());
    }

    deleteOrder(id:number):Observable<Order>{
        return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,this.getOptions());
    }

    updateOrder(order:Order):Observable<Order>{
        return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,order,this.getOptions());
    }
    
}