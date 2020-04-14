import { EventEmitter, Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidenavService {
    public appDrawer: any;
    public currentUrl = new BehaviorSubject<string>(undefined);

    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) { // An event triggered when a navigation ends successfully.
                console.log(event.urlAfterRedirects);
                this.currentUrl.next(event.urlAfterRedirects);
            }
        });
    }

    public closeNav() {
        this.appDrawer.close();
    }

    public openNav() {
        this.appDrawer.open();
    }
}
