import { v4 as uuid } from 'uuid';
import Mongo, { MongoClient } from 'mongodb';

import { MongoUserInterface } from '../../../database/models/User.model';
import { OwnMongoDbODM } from '../own-mongo-odm';

describe('Own Mongo ODM', () => {
  let client: MongoClient;
  let mongoODM: OwnMongoDbODM;
  let users: MongoUserInterface[];

  beforeEach(() => {
    users = [
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
  });

  beforeAll(async () => {
    const MongoClient = require('mongodb').MongoClient;

    client = new MongoClient();
    mongoODM = new OwnMongoDbODM(client);

    jest.mock('mongodb', () => ({
      MongoClient: jest.fn().mockImplementation(() => ({
        db: jest.fn().mockImplementation(() => ({
          collection: jest.fn().mockImplementation(() => ({
            findOne: jest.fn().mockImplementation((searchData: Mongo.Filter<Mongo.Document>) => {
              return users.find((user) => user._id === searchData._id);
            }),
            insertOne: jest.fn().mockImplementation((data: MongoUserInterface) => {
              users.push(data);

              return {
                ...data,
                _id: data._id || uuid(),
              };
            }),
            findOneAndDelete: jest.fn().mockImplementation((searchData: Mongo.Filter<Mongo.Document>) => {
              const userIndex = users.findIndex((user) => user._id === searchData._id);
              if (userIndex === -1) return;

              const user = users[userIndex];
              users.splice(userIndex, 1);

              return user;
            }),
          })),
        })),
      })),
    }));
  });

  describe('.findById()', () => {
    it('Should return user by id', async () => {
      const user = await mongoODM.findById('123', 'users');

      expect(user).toEqual(users[0]);
    });

    it('Should return undefined if user is not found', async () => {
      const user = await mongoODM.findById('000', 'users');

      expect(user).toBeUndefined();
    });
  });

  describe('.save()', () => {
    it('Should create and save user data', async () => {
      const usersAmount = users.length;
      const user = await mongoODM.save(
        {
          name: 'Bob',
          dateOfBirth: new Date('1990-01-01'),
          friends: ['123', '456 '],
          likes: ['pizza', 'beer'],
        },
        'users',
      );

      expect(user).toEqual({
        _id: expect.any(String),
        name: 'Bob',
        dateOfBirth: new Date('1990-01-01'),
        friends: ['123', '456 '],
        likes: ['pizza', 'beer'],
      });
      expect(users).toHaveLength(usersAmount + 1);
    });
  });

  describe('.findByIdAndDelete()', () => {
    it('Should delete user by id', async () => {
      const id = '123';
      const usersAmount = users.length;

      const user = users.find((user) => user._id === id);
      const deletedUser = await mongoODM.findByIdAndDelete(id, 'users');

      expect(deletedUser).toEqual(user);
      expect(users).toHaveLength(usersAmount - 1);
    });

    it('Should return undefined if user is not found', async () => {
      const id = 'test';
      const usersAmount = users.length;

      const deletedUser = await mongoODM.findByIdAndDelete(id, 'users');

      expect(deletedUser).toBeUndefined();
      expect(users).toHaveLength(usersAmount);
    });
  });
});
