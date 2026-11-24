import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./core/auth/login/login').then((m) => m.Login),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./core/layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: 'wallet',
        title: 'Wallet',
        loadComponent: () =>
          import('./core/modules/components/wallet/wallet').then((m) => m.Wallet),
      },
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () =>
          import('./core/modules/components/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'top-up-request',
        title: 'Top-Up Request',
        loadComponent: () =>
          import('./core/modules/components/wallet/top-up-request/top-up-request').then(
            (m) => m.TopUpRequest,
          ),
      },
      {
        path: 'request-status',
        title: 'Request Status',
        loadComponent: () =>
          import('./core/modules/components/wallet/request-status/request-status').then(
            (m) => m.RequestStatus,
          ),
      },
      {
        path: 'wallet-history',
        title: 'Wallet History',
        loadComponent: () =>
          import('./core/modules/components/wallet/wallet-history/wallet-history').then(
            (m) => m.WalletHistory,
          ),
      },
      {
        path: 'search',
        title: 'Search',
        loadComponent: () =>
          import('./core/modules/components/search/search').then((m) => m.Search),
      },
      {
        path: 'notifications',
        title: 'Notifications',
        loadComponent: () =>
          import('./core/modules/components/notifications/notifications').then(
            (m) => m.Notifications,
          ),
      },
      {
        path: 'profile',
        title: 'Profile',
        loadComponent: () =>
          import('./core/modules/components/profile/profile').then((m) => m.Profile),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
