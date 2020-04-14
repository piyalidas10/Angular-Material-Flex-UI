import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Navitem} from '../../module/navitem';
import { SidenavService } from '../../service/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SidenavComponent implements OnInit {
  menus = [];
  @ViewChild('sidenav') sidenav: MatSidenav;
  expanded: boolean;

  constructor(
    private router: Router,
    public sidenavSrv: SidenavService
  ) {
    this.menuInitialization();
   }

  ngOnInit(): void {
    this.sidenavSrv.currentUrl.subscribe((url: string) => {
      console.log('url => ', url);
      if (url) {
        // this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        // this.ariaExpanded = this.expanded;
      }
    });
  }

  close() {
    this.sidenav.close();
  }

  menuInitialization() {
    this.menus = [
      {
        name: 'Flex Lauout Grid',
        icon: 'grid_on',
        route: '/'
      },
      {
        name: 'Flex Material Form',
        icon: 'edit',
        route: '/form'
      },
      {
        name: 'Help Centre',
        icon: 'live_help',
        route: '/'
      },
      {
        name: 'Notifications',
        icon: 'message',
        route: '/'
      },
      {
        name: 'Settings & Privacy',
        icon: 'settings',
        disabled: true,
        children: [
          {
            name: 'Setting',
            icon: 'person',
            route: '/'
          },
          {
            name: 'Language',
            icon: 'language',
            route: '/'
          }
        ]
      },
      {
        name: 'Logout',
        icon: 'power_settings_new',
        route: '/'
      }
    ];
  }

  onItemSelected(menu) {
    if (!menu.children || !menu.children.length) {
      this.router.navigate([menu.route]);
      this.sidenavSrv.closeNav();
    }
    if (menu.children && menu.children.length) {
      this.expanded = !this.expanded;
    }
  }

}
