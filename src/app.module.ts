import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

//Import Components here
import { AppComponent }   from './app.component';
import { StoresComponent } from './stores/store.component';
import { OrdersComponent } from './orders/order.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
    imports:      [
        NgbModule.forRoot(),
        BrowserModule,
        MaterialModule.forRoot(),
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent, StoresComponent, OrdersComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }