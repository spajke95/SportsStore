import { Injectable } from "@angular/core";
import { Product } from "./product.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository{
    private products:Product[]=[];
    private categories:string[]=[];

    constructor(private datasource:StaticDataSource){
        datasource.getProducts().subscribe(data=>{
            this.products=data;
            this.categories=data
            .map(p=>p.category??"(None)")
            .filter((c,index,array)=>array.indexOf(c)==index)
            .sort();
        });
    }

    getProducts(category?:string):Product[]{
        return this.products
        .filter(p=>category==undefined||category==p.category);
    }
    getProduct(id:number):Product|undefined{
        return this.products.find(p=>p.id==id);
    }
    getCategories():string[]{
        return this.categories;
    }

    saveProduct(product:Product){
        if(product.id==null||product.id==0){
            this.datasource.saveProduct(product)//.subscribe(p=>this.products.push(p));
            console.log("in product repository saveProduct method");
        }else{
            this.datasource.saveProduct(product)//.subscribe(p=>{
                //this.products.splice(
              //      this.products.findIndex(p=>p.id==product.id),1,product);
            //});
        }
    }


    deleteProduct(id:number){
        this.datasource.deleteProduct(id)//.subscribe(p=>{
            //this.products.splice(this.products.findIndex(p=>p.id==id),1);
        //});
    }
}