import { Document, Filter, MongoClient, WithId } from 'mongodb';

import mongoose from 'mongoose';

const DB_URL = 'mongodb://0.0.0.0:27017/';
const DB_NAME = 'myDb';
const COLLECTION_NAME = 'subscription';

const mongoURI = 'mongodb://localhost:27017/subscription-tracker';

let Subscription: { find: () => any[] | PromiseLike<any[]>; };

export class DBUtility {
  static async createConnection(): Promise<void> {
    // const client = new MongoClient(DB_URL);
    // try {
    //   await client.connect();
    //   const dbList = await client.db().admin().listDatabases();
    //   const isDbExists = dbList.databases.find((db) => db.name === DB_NAME);

    //   if (!isDbExists) {
    //     const db = client.db(DB_NAME);
    //     await db.createCollection(COLLECTION_NAME);
    //   }
    // } catch (error: unknown) {
    //   throw error;
    // } finally {
    //   client.close();
    // }

    // Connect to MongoDB using Mongoose
    mongoose
      .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('MongoDB Connected');
      })
      .catch((err: Error) => {
        console.error('Error connecting to MongoDB:', err);
      });

    // Define a Subscription model
    Subscription = mongoose.model(
      'Subscription',
      new mongoose.Schema({
        name: String,
        price: Number,
        active: Boolean
      })
    );
  }

  static async getRecordsByQuery(query: Filter<Document> = {}): Promise<WithId<any>[]> {
    // const client = new MongoClient(DB_URL);
    // try {
    //   await client.connect();
    //   const db = client.db(DB_NAME);
    //   const collection = db.collection(COLLECTION_NAME).find(query);
    //   return (await collection.toArray()) as WithId<any>[];
    // } catch (error: unknown) {
    //   throw error;
    // } finally {
    //   client.close();
    // }

    try {
      return Subscription.find();
    //   res.status(200).json(subscriptions);
    } catch (error) {
      console.error(error);
      // res.status(500).json({ message: 'Failed to retrieve subscriptions' });
    }
    return [];
  }

  static async getRecordByQuery(query: Filter<Document> = {}): Promise<WithId<any>> {
    const client = new MongoClient(DB_URL);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const record = db.collection(COLLECTION_NAME).findOne(query);
      return (await record) as WithId<any>;
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
