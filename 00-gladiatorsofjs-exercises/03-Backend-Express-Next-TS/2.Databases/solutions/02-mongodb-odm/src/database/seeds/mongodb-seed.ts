import { MongoClient } from 'mongodb';

const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const randomName = () => {
  const names = ['John', 'Jane', 'Bob', 'Alice', 'Mark', 'Kate', 'Tom', 'Sara', 'Jack', 'Jill'];
  return names[Math.floor(Math.random() * names.length)];
};

const randomItem = () => {
  const items = ['car', 'bike', 'house', 'computer', 'phone', 'book', 'pen', 'pencil', 'chair', 'table'];
  return items[Math.floor(Math.random() * items.length)];
};

const randomId = () => {
  return Math.floor(Math.random() * 1000000);
};

const randomUser = () => {
  const user = {
    name: randomName(),
    dateOfBirth: randomDate(new Date(1900, 0, 1), new Date(2000, 0, 1)),
    likes: [randomItem(), randomItem(), randomItem()],
    friends: [randomId(), randomId(), randomId()],
  };
  return user;
};

const randomUsers = (n: number) => {
  const users = [];
  for (let i = 0; i < n; i++) {
    users.push(randomUser());
  }
  return users;
};

export function runSeed(connection: MongoClient, collection: string) {
  const db = connection.db();
  const users = db.collection(collection);
  users.insertMany(randomUsers(1000)).then(() => {
    console.log('Done');
    connection.close();
  });
}
