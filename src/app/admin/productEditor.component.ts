import { Component } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    templateUrl:"productEditor.component.html"
})
export class ProductEditorComponent{

    editing:boolean=false;
    product:Product=new Product();

    constructor(private repository:ProductRepository,private router:Router,
        activatedRoute:ActivatedRoute){
            this.editing=activatedRoute.snapshot.params["mode"]=="edit"
            if(this.editing){
                Object.assign(this.product,
                    repository.getProduct(activatedRoute.snapshot.params["id"]));
            }
    }

    save(){
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
        console.log("in product repository save method");
    }
}