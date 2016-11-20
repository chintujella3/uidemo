import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components here
import { StoresComponent } from './stores/store.component';
import { OrdersComponent } from './orders/order.component';

const routes: Routes = [
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: 'stores',  component: StoresComponent },
    { path: 'orders', component: OrdersComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}