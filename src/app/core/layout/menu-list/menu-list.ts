import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { DockModule } from 'primeng/dock';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [DockModule, RouterLinkActive, RouterLink],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.css',
})
export class MenuList {
  items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-th-large',
      routerLink: '/dashboard',
    },
    {
      label: 'Search',
      icon: 'pi pi-search',
      routerLink: '/search',
    },
    {
      label: 'Wallet',
      icon: 'pi pi-wallet',
      routerLink: '/wallet',
    },
    {
      label: 'Notifications',
      icon: 'pi pi-bell',
      routerLink: '/notifications',
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: '/profile',
    },
  ];
}
