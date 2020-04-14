import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { SidenavService } from './service/sidenav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  private mediaSub: Subscription;
  @ViewChild('appDrawer') appDrawer: ElementRef;

  constructor(
    private mediaObserver: MediaObserver,
    public sidenavSrv: SidenavService
  ) {
  }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log('change => ', change);
        console.log('change.mqAlias => ', change.mqAlias);
      }
    );
  }

  ngAfterViewInit() {
    this.sidenavSrv.appDrawer = this.appDrawer;
  }

}
