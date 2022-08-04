import { emails } from '../../../constants/emails';

import { IEmailsRepository } from '../../../types/database';

import { Email } from '../../models/email.entity';

class InMemoryEmailsRepository implements IEmailsRepository {
  private emails: Email[] = emails;

  public getById(id: number): Email | undefined {
    return this.emails.find((email) => email.id === id);
  }

  public create(email: Email): Email | undefined {
    this.emails.push(email);

    return email;
  }

  public update(email: Email): Email | undefined {
    const index = this.emails.findIndex((e) => e.id === email.id);

    if (index === -1) return;

    this.emails[index] = email;

    return email;
  }
}

export const inMemoryEmailsRepository = new InMemoryEmailsRepository();
