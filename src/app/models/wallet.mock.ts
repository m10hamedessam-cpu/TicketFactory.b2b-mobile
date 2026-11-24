import { BankAccount, TopUpRequest, WalletTransaction } from './wallet.models';

export const MOCK_BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'acc-1',
    accountTitle: 'Account 1',
    bankName: 'Al Rajhi Bank',
    iban: 'SA03 8000 0000 6080 1016 7519',
    beneficiary: 'TicketFactory KSA Co.',
  },
  {
    id: 'acc-2',
    accountTitle: 'Account 2',
    bankName: 'Al Rajhi Bank',
    iban: 'SA03 8000 0000 6080 1016 7519',
    beneficiary: 'TicketFactory KSA Co.',
  },
  {
    id: 'acc-3',
    accountTitle: 'Account 3',
    bankName: 'Al Rajhi Bank',
    iban: 'SA03 8000 0000 6080 1016 7519',
    beneficiary: 'TicketFactory KSA Co.',
  },
];

export const MOCK_TOP_UP_REQUESTS: TopUpRequest[] = [
  {
    id: '#T091',
    amount: 5965.35,
    currency: 'SAR',
    bankAccount: 'Al Rajhi Bank',
    status: 'Approved',
  },
  {
    id: '#T092',
    amount: 3500.0,
    currency: 'SAR',
    bankAccount: 'Al Rajhi Bank',
    status: 'Pending',
  },
  {
    id: '#T093',
    amount: 7200.0,
    currency: 'SAR',
    bankAccount: 'Al Rajhi Bank',
    status: 'Rejected',
  },
  {
    id: '#T094',
    amount: 4800.0,
    currency: 'SAR',
    bankAccount: 'Al Rajhi Bank',
    status: 'Approved',
  },
];

export const MOCK_WALLET_TRANSACTIONS: WalletTransaction[] = [
  {
    referenceId: '#T091',
    date: '30 Apr 2026',
    title: 'Wallet Top-up',
    statusText: 'Approved by Admin',
  },
  {
    referenceId: '#T092',
    date: '30 Apr 2026',
    title: 'Wallet Top-up',
    statusText: 'Approved by Admin',
  },
  {
    referenceId: '#T093',
    date: '30 Apr 2026',
    title: 'Wallet Top-up',
    statusText: 'Approved by Admin',
  },
  {
    referenceId: '#T094',
    date: '30 Apr 2026',
    title: 'Wallet Top-up',
    statusText: 'Approved by Admin',
  },
];
