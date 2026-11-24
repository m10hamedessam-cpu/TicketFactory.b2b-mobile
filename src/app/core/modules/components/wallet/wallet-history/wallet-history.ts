import { Component, computed, inject, signal } from '@angular/core';
import { WalletService } from '../../../../services/wallet';
@Component({
  selector: 'app-wallet-history',
  standalone: true,
  imports: [],
  templateUrl: './wallet-history.html',
  styleUrl: './wallet-history.css',
})
export class WalletHistory {
  private readonly walletService = inject(WalletService);
  readonly transactions = this.walletService.transactions;
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
