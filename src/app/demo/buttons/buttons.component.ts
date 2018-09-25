import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
    <mat-icon>face</mat-icon>
    Click Me!</button>
    <mat-checkbox>Check me!</mat-checkbox><mat-slider></mat-slider><mat-slide-toggle></mat-slide-toggle><mat-progress-bar mode="indeterminate" color="warn"></mat-progress-bar>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
