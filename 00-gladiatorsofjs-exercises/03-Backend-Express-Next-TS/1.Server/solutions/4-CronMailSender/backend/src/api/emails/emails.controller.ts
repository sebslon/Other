import { Request } from 'express';

import { TResponse } from '../../types/express';

import { EmailsService } from '../../services/emails.service';

import { Email } from '../../database/models/email.entity';
import { inMemoryEmailsRepository } from '../../database/repositories/memory/memory-emails.repository';

class EmailsController {
  private emailsService: EmailsService;

  constructor(emailsService: EmailsService) {
    this.emailsService = emailsService;
  }

  getEmail(req: Request, res: TResponse<Email>) {
    const result = this.emailsService.getEmail(parseInt(req.params.id));

    res.status(200).send(result);
  }

  visitEmail(req: Request, res: TResponse<Email>) {
    const result = this.emailsService.visitEmail(parseInt(req.params.id));

    res.status(200).send(result);
  }
}

export const emailsController = new EmailsController(
  new EmailsService(inMemoryEmailsRepository)
);
