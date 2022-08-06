import { AppError } from '../helpers/error';

import { IEmailsRepository } from '../types/database';

export class EmailsService {
  emailsRepository: IEmailsRepository;

  constructor(repository: IEmailsRepository) {
    this.emailsRepository = repository;
  }

  getEmail(id: number) {
    const email = this.emailsRepository.getById(id);

    if (!email) throw new AppError(400, 'Email not found');

    return email;
  }

  visitEmail(id: number) {
    const email = this.emailsRepository.getById(id);

    if (!email) throw new AppError(400, 'Email not found');

    const updatedEmail = { ...email };
    updatedEmail.timesVisited++;

    this.emailsRepository.update(updatedEmail);

    return email;
  }

  toggleEmail(id: number) {
    const email = this.emailsRepository.getById(id);

    if (!email) throw new AppError(400, 'Email not found');

    const updatedEmail = { ...email };
    updatedEmail.active = !updatedEmail.active;

    this.emailsRepository.update(updatedEmail);

    return email;
  }
}
