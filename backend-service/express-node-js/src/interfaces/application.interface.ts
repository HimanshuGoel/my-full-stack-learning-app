export interface IDTOSaveApplication {
  name: string;
  title: string;
  applicationConfig: Record<string, unknown>;
}

export interface IDTOApplication extends IDTOSaveApplication {
  lastModified: Date;
  lastModifiedBy: string;
}
