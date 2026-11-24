import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_BANK_ACCOUNTS } from '../../models/wallet.mock';
import { BankAccount } from '../../models/wallet.models';

@Component({
  selector: 'app-wallet',
  imports: [RouterLink],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css',
})
export class Wallet {
  readonly accounts: BankAccount[] = MOCK_BANK_ACCOUNTS;
}
