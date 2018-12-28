import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
//import {FlexLayoutModule} from '@angular/flex-layout';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PropertyService } from './service/property.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderService } from './service/header.service';
import { MessageComponent } from './components/message/message.component';


//these path will be injected to router-outlet insdie side-nav-component
const routes: Routes = [
  {path: '', component: ContactmanagerAppComponent, children:[
    {path: ':id', component: MessageComponent},
    {path: '', component: MainContentComponent}
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    HttpClientModule, //for http calls
    //FlexLayoutModule,
    ImageCropperModule,
    RouterModule.forChild(routes)
  ],
  providers:[PropertyService, HeaderService],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent, MessageComponent]
})
export class ContactmanagerModule { }
