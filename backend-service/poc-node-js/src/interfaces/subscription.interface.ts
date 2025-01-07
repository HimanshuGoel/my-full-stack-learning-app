export interface IDTOSaveApplication {
  name: string;
  title: string;
  applicationConfig: Record<string, unknown>;
}

export interface IDTOApplication extends IDTOSaveApplication {
  lastModified: Date;
  lastModifiedBy: string;
}

export interface ISubscriptionRecord {
  name: string;
  amount: number;
  renewalDate: Date;
  frequency: 'monthly' | 'yearly';
  category: 'Entertainment' | 'Utility' | 'Food' | 'Transport';
  notifications: boolean;
}
