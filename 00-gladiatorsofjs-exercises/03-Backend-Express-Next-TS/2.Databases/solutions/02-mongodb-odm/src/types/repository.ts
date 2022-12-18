// Repositories for example

export interface IRepository<T> {}

export interface SampleRepository extends IRepository<any> {
  getUser(name: string): string | undefined;
}
