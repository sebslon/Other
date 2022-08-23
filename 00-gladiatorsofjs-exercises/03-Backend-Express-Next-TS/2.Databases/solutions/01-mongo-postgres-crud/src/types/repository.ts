import { Cat } from './cats';

export interface IRepository<T> {}

export interface CatsRepository extends IRepository<Cat> {
  getUser(name: string): string | undefined;
}
