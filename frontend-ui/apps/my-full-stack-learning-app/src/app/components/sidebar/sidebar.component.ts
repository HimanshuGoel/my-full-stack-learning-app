import { Component, OnInit } from '@angular/core';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
declare const $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  {
    path: '/concepts',
    title: 'Concepts',
    icon: 'library_books',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[] = [];

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
