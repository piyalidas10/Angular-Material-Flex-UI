import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SidenavService } from '../../service/sidenav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Angular material with flex layout';

  constructor(public sidenavSrv: SidenavService) { }

  ngOnInit(): void {
  }

}
