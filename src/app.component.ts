import { Component, OnInit } from '@angular/core';
import { StoresService } from './stores/store.service';
@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [ StoresService ]
})
export class AppComponent {
    constructor(private storesService: StoresService) { }

    ngOnInit(): void {
        this.storesService.syncStores();
    }
}