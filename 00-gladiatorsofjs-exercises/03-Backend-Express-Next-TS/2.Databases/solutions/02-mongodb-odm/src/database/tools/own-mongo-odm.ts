import * as Mongo from 'mongodb';

export class OwnMongoDBODM {
  private _client!: Mongo.MongoClient;

  constructor(client: Mongo.MongoClient) {
    this._client = client;
  }

  public findById(id: string, collection: string, db?: string) {
    return this._client.db(db).collection(collection).findOne({ _id: id });
  }
}
