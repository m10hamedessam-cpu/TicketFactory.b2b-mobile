import { Routes } from '@angular/router';
import { Login } from './core/auth/login/login';
import { MainLayout } from './core/layout/main-layout';
import { Dashboard } from './core/modules/components/dashboard/dashboard';
import { Wallet } from './core/modules/components/wallet/wallet';
import { TopUpRequest } from './core/modules/components/top-up-request/top-up-request';
import { RequestStatus } from './core/modules/components/request-status/request-status';
import { WalletHistory } from './core/modules/components/wallet-history/wallet-history';

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
      {
        path: 'top-up-request',
        component: TopUpRequest,
      },
      {
        path: 'request-status',
        component: RequestStatus,
      },
      {
        path: 'wallet-history',
        component: WalletHistory,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
