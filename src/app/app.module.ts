import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckOutComponent } from './store/checkOut.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StoreModule,
    RouterModule.forRoot([
      {path:"store",component:StoreComponent,canActivate:[StoreFirstGuard]},
      {path:"cart",component:CartDetailComponent,canActivate:[StoreFirstGuard]},
      {path:"checkout",component:CheckOutComponent,canActivate:[StoreFirstGuard]},
      {path:"admin",loadChildren:()=>import("./admin/admin.module")
      .then(m=>m.AdminModule),canActivate:[StoreFirstGuard]},
      {path:"**",redirectTo:"/store"}
     
    ]),
    BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
