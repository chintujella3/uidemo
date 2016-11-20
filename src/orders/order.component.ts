import { Component } from '@angular/core';
import { OrdersService } from './order.service';

@Component({
    selector: 'orders',
    templateUrl: 'orders/orders.component.html',
    styleUrls: ['orders/orders.component.css'],
    providers: [ OrdersService ]
})

export class OrdersComponent{}