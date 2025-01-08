export interface ISubscriptionRecord {
  name: string;
  amount: number;
  renewalDate: Date;
  frequency: 'monthly' | 'yearly';
  category: 'entertainment' | 'utility' | 'food' | 'transport';
  notifications: boolean;
}
