import { Component, input, output, signal } from '@angular/core';
import { BankAccount } from '../../../models/wallet.models';

@Component({
  selector: 'app-bank-account-card',
  standalone: true,
  styleUrl: './bank-account-card.css',
  template: `
    <div class="bank-account-card">
      <div class="account-header">
        <h3>{{ account().accountTitle }}</h3>
        <button
          type="button"
          class="copy-button"
          (click)="handleCopy()"
          [attr.aria-label]="'Copy ' + account().accountTitle + ' details'"
        >
          <i [class]="copied() ? 'pi pi-check' : 'pi pi-copy'" aria-hidden="true"></i>
        </button>
      </div>

      <div class="account-details">
        <div class="account-row">
          <span>Bank</span>
          <strong>{{ account().bankName }}</strong>
        </div>

        <div class="account-row">
          <span>IBAN</span>
          <strong>{{ account().iban }}</strong>
        </div>

        <div class="account-row">
          <span>Beneficiary</span>
          <strong>{{ account().beneficiary }}</strong>
        </div>
      </div>
    </div>
  `,
})
export class BankAccountCard {
  readonly account = input.required<BankAccount>();
  readonly copiedIban = output<string>();
  readonly copied = signal(false);

  handleCopy(): void {
    const iban = this.account().iban;
    navigator.clipboard?.writeText(iban);
    this.copied.set(true);
    this.copiedIban.emit(iban);

    setTimeout(() => this.copied.set(false), 2000);
  }
}
