import { DBUtility } from '../utilities/db.utility';

export class SubscriptionsRepo {
  static async getAll(): Promise<any[]> {
    const records = await DBUtility.getRecordsByQuery({});
    return records;
  }

  static async get(name: string): Promise<any> {
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
    // }
  }

  static async create(data: any): Promise<void> {
    // const record = buildRecord(applicationData, userEmailId);
    // await DBUtility.createRecord(record);
  }

  static async update(name: string, updatedData: string): Promise<void> {
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

  static async delete(name: string): Promise<void> {
    // await DBUtility.deleteRecordByQuery({ applicationName, userEmailId });
  }
}
