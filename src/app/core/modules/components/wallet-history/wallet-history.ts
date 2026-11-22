import { Component, computed, signal } from '@angular/core';
import { MOCK_WALLET_TRANSACTIONS } from '../../models/wallet.mock';
import { WalletTransaction } from '../../models/wallet.models';

@Component({
  selector: 'app-wallet-history',
  standalone: true,
  imports: [],
  templateUrl: './wallet-history.html',
  styleUrl: './wallet-history.css',
})
export class WalletHistory {
  readonly transactions = signal<WalletTransaction[]>(MOCK_WALLET_TRANSACTIONS);
  readonly searchQuery = signal<string>('');

  readonly filteredTransactions = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) return this.transactions();
    return this.transactions().filter(
      (tx) =>
        tx.referenceId.toLowerCase().includes(query) ||
        tx.title.toLowerCase().includes(query) ||
        tx.statusText.toLowerCase().includes(query),
    );
  });

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }
}
