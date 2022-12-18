const Mongo = require('mongodb');

describe('Own Mongo ODM', () => {
  beforeAll(async () => {
    const mongoClient = Mongo.MongoClient;
    const client = new mongoClient(process.env.MONGODB_URI);

    try {
      await client.connect();
      console.log('Connected to the database');
    } catch (error) {
      console.log(error);
      throw new Error('Could not connect to the database');
    }
  });

  it('Should connect to the database', async () => {});
});
