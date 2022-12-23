import * as Mongo from 'mongodb';

export class OwnMongoDbODM {
  private _client!: Mongo.MongoClient;
  private collection!: string;

  constructor(client: Mongo.MongoClient, collection: string) {
    this._client = client;
    this.collection = collection;
  }

  public find<T>(filter: Mongo.Filter<T>, db?: string) {
    return this._client
      .db(db)
      .collection(this.collection)
      .find({ ...filter });
  }

  public findById(id: string, db?: string) {
    return this._client.db(db).collection(this.collection).findOne({ _id: id });
  }

  public findByIdAndDelete(id: string, db?: string) {
    return this._client.db(db).collection(this.collection).findOneAndDelete({ _id: id });
  }

  public findByIdAndUpdate(id: string, data: Mongo.Document, db?: string) {
    return this._client.db(db).collection(this.collection).findOneAndUpdate({ _id: id }, data);
  }

  public save(data: Mongo.Document, db?: string) {
    return this._client.db(db).collection(this.collection).insertOne(data);
  }
}
