import { Email } from '../database/models/email.entity';

export const emails: Email[] = [
  {
    id: 1,
    receiver: process.env.EMAIL_RECEIVER!,
    content: 'Hello, visit the link.',
    subject: 'Very important email',
    html: '<a href="http://localhost:3011/email/1">Visit page nr. 1</a>',
    timesVisited: 0,
    active: true,
  },
  {
    id: 2,
    receiver: process.env.EMAIL_RECEIVER!,
    content: 'Hello, visit the link.',
    subject: 'Very important email',
    html: '<a href="http://localhost:3011/email/2">Visit page nr. 2</a>',
    timesVisited: 0,
    active: true,
  },
  {
    id: 3,
    receiver: process.env.EMAIL_RECEIVER!,
    content: 'Hello, visit the link.',
    subject: 'Very important email',
    html: '<a href="http://localhost:3011/email/3">Visit page nr. 3</a>',
    timesVisited: 0,
    active: true,
  },
];
