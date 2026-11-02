import { Routes } from '@angular/router';
import { Login } from './core/auth/login/login';
import { MainLayout } from './core/layout/main-layout';
import { Dashboard } from './core/modules/components/dashboard/dashboard';
import { Wallet } from './core/modules/components/wallet/wallet';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'wallet',
        component: Wallet,
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
