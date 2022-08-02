import { Email } from '../database/models/email.entity';

export interface IRepository<T> {}

export interface IEmailsRepository extends IRepository<Email> {
  getById(id: number): Email | undefined;
}
