"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var material_module_1 = require("../shared/material.module");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var contactmanager_app_component_1 = require("./contactmanager-app.component");
var toolbar_component_1 = require("./components/toolbar/toolbar.component");
var main_content_component_1 = require("./components/main-content/main-content.component");
var side_nav_component_1 = require("./components/side-nav/side-nav.component");
//these path will be injected to router-outlet insdie side-nav-component
var routes = [
    { path: '', component: contactmanager_app_component_1.ContactmanagerAppComponent, children: [
            { path: '', component: main_content_component_1.MainContentComponent }
        ] },
    { path: '**', redirectTo: '' }
];
var ContactmanagerModule = /** @class */ (function () {
    function ContactmanagerModule() {
    }
    ContactmanagerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [contactmanager_app_component_1.ContactmanagerAppComponent, toolbar_component_1.ToolbarComponent, main_content_component_1.MainContentComponent, side_nav_component_1.SideNavComponent]
        })
    ], ContactmanagerModule);
    return ContactmanagerModule;
}());
exports.ContactmanagerModule = ContactmanagerModule;
//# sourceMappingURL=contactmanager.module.js.map