import { Document, Filter, MongoClient, WithId } from 'mongodb';

import { IApplicationRecord } from '../interfaces/record.interface';

const DB_URL = 'mongodb://0.0.0.0:27017/';
const DB_NAME = 'myDb';
const COLLECTION_NAME = 'applications';

export class DBUtility {
  static async createConnection(): Promise<void> {
    const client = new MongoClient(DB_URL);
    try {
      await client.connect();
      const dbList = await client.db().admin().listDatabases();
      const isDbExists = dbList.databases.find((db) => db.name === DB_NAME);

      if (!isDbExists) {
        const db = client.db(DB_NAME);
        await db.createCollection(COLLECTION_NAME);
      }
    } catch (error: unknown) {
      throw error;
    } finally {
      client.close();
    }
  }

  static async getRecordsByQuery(
    query: Filter<Document> = {}
  ): Promise<WithId<IApplicationRecord>[]> {
    const client = new MongoClient(DB_URL);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const collection = db.collection(COLLECTION_NAME).find(query);
      return (await collection.toArray()) as WithId<IApplicationRecord>[];
    } catch (error: unknown) {
      throw error;
    } finally {
      client.close();
    }
  }

  static async getRecordByQuery(query: Filter<Document> = {}): Promise<WithId<IApplicationRecord>> {
    const client = new MongoClient(DB_URL);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const record = db.collection(COLLECTION_NAME).findOne(query);
      return (await record) as WithId<IApplicationRecord>;
    } catch (error: unknown) {
      throw error;
    } finally {
      client.close();
    }
  }

  static async createRecord(record: Document): Promise<void> {
    const client = new MongoClient(DB_URL);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      await db.collection(COLLECTION_NAME).insertOne(record);
    } catch (error: unknown) {
      throw error;
    } finally {
      client.close();
    }
  }

  static async deleteRecordByQuery(query: Filter<Document>): Promise<void> {
    const client = new MongoClient(DB_URL);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      await db.collection(COLLECTION_NAME).deleteOne(query);
    } catch (error: unknown) {
      throw error;
    } finally {
      client.close();
    }
  }

  static async updateRecordByQuery(
    query: Filter<Document>,
    updatedRecord: Document
  ): Promise<void> {
    const client = new MongoClient(DB_URL);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      await db.collection(COLLECTION_NAME).replaceOne(query, updatedRecord);
    } catch (error: unknown) {
      throw error;
    } finally {
      client.close();
    }
  }
}
