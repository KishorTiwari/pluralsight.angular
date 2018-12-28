import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../service/property.service';
import { Observable } from 'rxjs';
import { Property } from '../../models/property';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  properties: Property[];
  constructor(private _propertyService: PropertyService) {

   }

  ngOnInit() {
    this._propertyService.getUserProperties().subscribe(
      (resp: HttpResponse<Property[]>)=>{
        setTimeout(()=>{
          this.properties = resp.body;
          console.log("Response Status Code: " + resp.status);
        },500)
        //this.properties = resp.body;
      })
  }


  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
      this.croppedImage = image;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }
}
