import { IDTOApplication, IDTOSaveApplication } from '../interfaces/subscription.interface';
import { DBUtility } from '../utilities/db.utility';

export class SubscriptionsRepo {
  static async getAll(): Promise<any[]> {
    const applicationRecords = await DBUtility.getRecordsByQuery();

    // const result: IDTOApplication[] = [];
    // for (const applicationRecord of applicationRecords) {
    //   result.push({
    //     name: applicationRecord.applicationName,
    //     title: this.getApplicationTitle(applicationRecord),
    //     applicationConfig: applicationRecord.postBuildUiConfig['app-config-en.json'],
    //     lastModified: applicationRecord.lastModified,
    //     lastModifiedBy: applicationRecord.lastModifiedBy
    //   });
    // }

    // const result = [
    //   {
    //     id: '2',
    //     name: 'Netflix',
    //     amount: 500,
    //     renewalDate: '2025-01-30',
    //     frequency: 'Monthly',
    //     category: 'Entertainment',
    //     notifications: true
    //   }
    // ];

    return applicationRecords
  }

  static async getByName(
    applicationName: string,
    userEmailId: string
  ): Promise<IDTOApplication | null> {
    // let applicationRecord;
    // if (applicationName === 'new') {
    //   // Construct dummy record for a 'new' application
    //   applicationRecord = buildRecord({ name: '', title: '', applicationConfig: {} }, userEmailId);
    // } else {
    //   applicationRecord = await DBUtility.getRecordByQuery({ applicationName, userEmailId });
    // }

    // if (applicationRecord) {
    //   return {
    //     name: applicationRecord.applicationName,
    //     title: this.getApplicationTitle(applicationRecord),
    //     applicationConfig: applicationRecord.postBuildUiConfig['app-config-en.json'],
    //     lastModified: applicationRecord.lastModified,
    //     lastModifiedBy: applicationRecord.lastModifiedBy
    //   };
    // } else {
    return null;
    // }
  }

  static async create(applicationData: IDTOSaveApplication, userEmailId: string): Promise<void> {
    // const record = buildRecord(applicationData, userEmailId);
    // await DBUtility.createRecord(record);
  }

  static async update(
    existingApplicationName: string,
    updatedApplicationData: IDTOSaveApplication,
    userEmailId: string
  ): Promise<void> {
    // const applicationRecord = await DBUtility.getRecordByQuery({
    //   applicationName: existingApplicationName,
    //   userEmailId
    // });
    // const updatedApplicationRecord = await this.getUpdatedRecord(
    //   existingApplicationName,
    //   updatedApplicationData,
    //   applicationRecord,
    //   userEmailId
    // );
    // await DBUtility.updateRecordByQuery(
    //   { _id: updatedApplicationRecord._id },
    //   updatedApplicationRecord
    // );
  }

  static async delete(applicationName: string, userEmailId: string): Promise<void> {
    // await DBUtility.deleteRecordByQuery({ applicationName, userEmailId });
  }
}
