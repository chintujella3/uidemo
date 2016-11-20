'use strict';

/// <reference path="../_reference.d.ts" />

import { Component, OnInit } from '@angular/core';

import { StoresService } from 'store.service';

@Component({
    selector: 'stores',
    templateUrl: 'stores/stores.component.html',
    providers: [ StoresService ]
})

export class StoresComponent implements OnInit {
    stores: any;

    constructor(private storesService: StoresService) { }

    ngOnInit(): void {
        this.storesService.getLocalStores()
            .then((stores) => this.stores = stores);
    }
}