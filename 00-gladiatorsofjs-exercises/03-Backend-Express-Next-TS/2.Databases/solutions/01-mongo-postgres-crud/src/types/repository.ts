import { ICat } from './domain/cats';

export interface IRepository<T> {}

export interface CatsRepository extends IRepository<ICat> {
  getUser(name: string): string | undefined;
}
