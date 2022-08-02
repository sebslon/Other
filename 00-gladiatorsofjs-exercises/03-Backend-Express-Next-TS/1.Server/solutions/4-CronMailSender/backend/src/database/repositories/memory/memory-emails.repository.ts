import { emails } from '../../../constants/emails';

import { IEmailsRepository } from '../../../types/database';

import { Email } from '../../models/email.entity';

class InMemoryEmailsRepository implements IEmailsRepository {
  private emails: Email[] = emails;

  public getById(id: number): Email | undefined {
    return this.emails.find((email) => email.id === id);
  }
}

export const inMemoryEmailsRepository = new InMemoryEmailsRepository();
