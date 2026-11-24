export interface BankAccount {
  id: string;
  accountTitle: string;
  bankName: string;
  iban: string;
  beneficiary: string;
}

export type RequestStatusType = 'Approved' | 'Pending' | 'Rejected';

export interface TopUpRequest {
  id: string;
  amount: number;
  currency: string;
  bankAccount: string;
  status: RequestStatusType;
}

export interface WalletTransaction {
  referenceId: string;
  date: string;
  title: string;
  statusText: string;
}
