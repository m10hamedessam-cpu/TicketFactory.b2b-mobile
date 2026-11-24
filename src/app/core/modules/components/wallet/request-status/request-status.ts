import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { WalletService } from '../../../../services/wallet';
import { PageHeader } from '../../../../../shared/components/page-header/page-header';
@Component({
  selector: 'app-request-status',
  standalone: true,
  imports: [DecimalPipe, PageHeader],
  templateUrl: './request-status.html',
  styleUrl: './request-status.css',
})
export class RequestStatus {
  private readonly walletService = inject(WalletService);
  readonly requests = this.walletService.topUpRequests;
  readonly searchQuery = signal<string>('');
  readonly selectedIds = signal<Set<string>>(new Set());

  readonly filteredRequests = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) return this.requests();
    return this.requests().filter(
      (req) =>
        req.id.toLowerCase().includes(query) ||
        req.bankAccount.toLowerCase().includes(query) ||
        req.status.toLowerCase().includes(query),
    );
  });

  readonly summaryCards = computed(() => {
    const list = this.requests();
    return [
      { label: 'Total Requests', count: list.length },
      { label: 'Approved', count: list.filter((r) => r.status === 'Approved').length },
      { label: 'Pending Approval', count: list.filter((r) => r.status === 'Pending').length },
      { label: 'Rejected', count: list.filter((r) => r.status === 'Rejected').length },
    ];
  });

  readonly isAllSelected = computed(() => {
    const visible = this.filteredRequests();
    const selected = this.selectedIds();
    return visible.length > 0 && visible.every((req) => selected.has(req.id));
  });

  readonly isIndeterminate = computed(() => {
    const visible = this.filteredRequests();
    const selected = this.selectedIds();
    const selectedVisibleCount = visible.filter((req) => selected.has(req.id)).length;
    return selectedVisibleCount > 0 && selectedVisibleCount < visible.length;
  });

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }

  toggleSelectAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const next = new Set(this.selectedIds());
    for (const req of this.filteredRequests()) {
      if (checked) {
        next.add(req.id);
      } else {
        next.delete(req.id);
      }
    }
    this.selectedIds.set(next);
  }

  toggleRow(id: string): void {
    const next = new Set(this.selectedIds());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.selectedIds.set(next);
  }

  isSelected(id: string): boolean {
    return this.selectedIds().has(id);
  }
}
