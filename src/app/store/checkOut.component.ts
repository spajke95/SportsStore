import { Component } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
    templateUrl:"checkOut.component.html",
    styleUrls:["checkOut.component.css"]
})
export class CheckOutComponent{
    orderSent:boolean=false;
    submitted:boolean=false;

    constructor(public repository:OrderRepository,public order:Order){ }

    submitOrder(form:NgForm){
        this.submitted=true;
        if(form.valid){
            this.repository.saveOrder(this.order).subscribe(order=>
                {
                    this.order.clear();
                    this.orderSent=true;
                    this.submitted=false
                });
                
        }
    }
}