"use strict";

/// <reference path="../_reference.d.ts" />

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import * as PouchDB from 'pouchdb';

import 'rxjs/add/operator/toPromise';

import { Store } from './store';

@Injectable()

export class StoresService {
    storesPouch: any;
    storesCouch: any;

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
        this.storesPouch = new PouchDB('stores');
        this.storesCouch = new PouchDB(SERVER_HOST + 'stores');
    }

    // Syncing the Stores from Couchdb to Pouchdb
    syncStores(): Promise<Store> {
        console.log('Sync Called');
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.storesPouch.replicate.from(storeDataSrvInstance.storesCouch)
            .then( () => storeDataSrvInstance.storesPouch.allDocs({ include_docs: true } ))
            .then(res => res.rows);
    }

    getLocalStores(): Promise<Store> {
        console.log('Local Called');
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.storesPouch.allDocs({ include_docs: true })
            .then(res => res.rows);
    }
}