import { Injectable, computed, signal } from '@angular/core';
import {
  MOCK_BANK_ACCOUNTS,
  MOCK_TOP_UP_REQUESTS,
  MOCK_WALLET_TRANSACTIONS,
} from '../../models/wallet.mock';
import { BankAccount, TopUpRequest, WalletTransaction } from '../../models/wallet.models';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private readonly _bankAccounts = signal<BankAccount[]>(MOCK_BANK_ACCOUNTS);
  private readonly _topUpRequests = signal<TopUpRequest[]>(MOCK_TOP_UP_REQUESTS);
  private readonly _transactions = signal<WalletTransaction[]>(MOCK_WALLET_TRANSACTIONS);

  readonly bankAccounts = this._bankAccounts.asReadonly();
  readonly topUpRequests = this._topUpRequests.asReadonly();
  readonly transactions = this._transactions.asReadonly();

  readonly pendingRequestsCount = computed(
    () => this._topUpRequests().filter((req) => req.status === 'Pending').length,
  );

  addTopUpRequest(request: TopUpRequest): void {
    this._topUpRequests.update((current) => [request, ...current]);
  }
}
