import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavMenuItem {
  label: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.css',
})
export class MenuList {
  readonly items = signal<NavMenuItem[]>([
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
  ]);
}
