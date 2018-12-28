import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`);
  constructor(zone: NgZone, private router: Router) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MatSidenav) sideNave: MatSidenav; //get the actual side-nav by id from the template
  ngOnInit() {
    //subscribe to router event and when its changed do this....
    this.router.events.subscribe(()=>{
      if(this.isScreenSmall()) this.sideNave.close();
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
