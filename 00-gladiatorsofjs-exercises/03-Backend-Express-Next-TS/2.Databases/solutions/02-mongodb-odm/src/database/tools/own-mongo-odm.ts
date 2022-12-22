import * as Mongo from 'mongodb';

export class OwnMongoDbODM {
  private _client!: Mongo.MongoClient;

  constructor(client: Mongo.MongoClient) {
    this._client = client;
  }

  public findById(id: string, collection: string, db?: string) {
    return this._client.db(db).collection(collection).findOne({ _id: id });
  }

  public findByIdAndDelete(id: string, collection: string, db?: string) {
    return this._client.db(db).collection(collection).findOneAndDelete({ _id: id });
  }

  public save(data: Mongo.Document, collection: string, db?: string) {
    return this._client.db().collection(collection).insertOne(data);
  }
}
