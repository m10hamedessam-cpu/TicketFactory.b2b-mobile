import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { MenuList } from './menu-list/menu-list';
import { Sidebar } from './sidebar/sidebar';
import { TopBar } from './top-bar/top-bar';

const ROUTE_TITLES: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/search': 'Search',
  '/wallet': 'Wallet',
  '/top-up-request': 'Top-Up Request',
  '/wallet-history': 'Wallet History',
  '/request-status': 'Request Status',
  '/notifications': 'Notifications',
  '/profile': 'Profile',
};

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, TopBar, Sidebar, MenuList],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private readonly router = inject(Router);

  readonly sidebarOpen = signal(false);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  readonly pageTitle = computed(() => {
    const cleanPath = this.currentUrl().split('?')[0].split('#')[0];
    return ROUTE_TITLES[cleanPath] ?? 'TicketFactory';
  });
}
