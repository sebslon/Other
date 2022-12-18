import Mongo, { MongoClient } from 'mongodb';

import { MongoUser } from '../../../database/models/User.model';
import { OwnMongoDbODM } from '../own-mongo-odm';

const mockUsers: MongoUser[] = [
  {
    _id: '123',
    name: 'John',
    dateOfBirth: new Date('1990-01-01'),
    friends: ['456', '789'],
    likes: ['pizza'],
  },
  {
    _id: '456',
    name: 'Jane',
    dateOfBirth: new Date('1991-01-01'),
    friends: ['123', '789'],
    likes: ['pizza', 'beer'],
  },
  {
    _id: '789',
    name: 'Jack',
    dateOfBirth: new Date('1992-01-01'),
    friends: ['123', '456'],
    likes: ['beer'],
  },
];

describe('Own Mongo ODM', () => {
  let client: MongoClient;
  let mongoODM: OwnMongoDbODM;

  beforeAll(async () => {
    const MongoClient = require('mongodb').MongoClient;

    client = new MongoClient();
    mongoODM = new OwnMongoDbODM(client);

    jest.mock('mongodb', () => ({
      MongoClient: jest.fn().mockImplementation(() => ({
        db: jest.fn().mockImplementation(() => ({
          collection: jest.fn().mockImplementation(() => ({
            findOne: jest.fn().mockImplementation((searchData: Mongo.Filter<Mongo.Document>) => {
              return mockUsers.find((user) => user._id === searchData._id);
            }),
          })),
        })),
      })),
    }));
  });

  describe('.findById()', () => {
    it('Should return user by id', async () => {
      const user = await mongoODM.findById('123', 'users');

      expect(user).toEqual(mockUsers[0]);
    });

    it('Should return undefined if user is not found', async () => {
      const user = await mongoODM.findById('000', 'users');

      expect(user).toBeUndefined();
    });
  });
});
