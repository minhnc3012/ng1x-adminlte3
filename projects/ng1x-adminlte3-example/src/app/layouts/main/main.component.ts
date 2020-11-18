import { Component, OnInit, Renderer2, ViewChild, HostListener, ElementRef } from '@angular/core';
import { sidebarMenu } from '../../config/sidebar-menu.config';

@Component({
  selector: 'app-layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class LayoutMainComponent implements OnInit {
  public sidebarMenu = sidebarMenu;
  constructor() {
  }

  ngOnInit() { }


  toggleMenuSidebar(sidebarMenuOpened?: boolean) {
    console.log('sidebarMenuCollapsed', sidebarMenuOpened);
  }
  toggleControlSidebar(sidebarControlOpened: boolean) {
    console.log('sidebarControlOpened', sidebarControlOpened);
  }
  logout() {

  }
}
