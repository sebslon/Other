export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: number | string): Promise<T | null | undefined>;
}
