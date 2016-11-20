'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var store_service_1 = require('store.service');
var StoresComponent = (function () {
    function StoresComponent(storesService) {
        this.storesService = storesService;
    }
    StoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storesService.getLocalStores()
            .then(function (stores) { return _this.stores = stores; });
    };
    StoresComponent = __decorate([
        core_1.Component({
            selector: 'stores',
            templateUrl: 'stores/stores.component.html',
            providers: [store_service_1.StoresService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_service_1.StoresService !== 'undefined' && store_service_1.StoresService) === 'function' && _a) || Object])
    ], StoresComponent);
    return StoresComponent;
    var _a;
}());
exports.StoresComponent = StoresComponent;
