import { Email } from '../database/models/email.entity';

export interface IRepository<T> {}

export interface IEmailsRepository extends IRepository<Email> {
  getById(id: number): Email | undefined;
  update(email: Email): Email | undefined;
  create(email: Email): Email | undefined;
}
