import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_BANK_ACCOUNTS } from '../../../../models/wallet.mock';
import { BankAccount } from '../../../../models/wallet.models';
import { BankAccountCard } from '../../../../shared/components/bank-account-card/bank-account-card';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
@Component({
  selector: 'app-wallet',
  imports: [RouterLink, BankAccountCard, PageHeader],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css',
})
export class Wallet {
  readonly accounts: BankAccount[] = MOCK_BANK_ACCOUNTS;
}
