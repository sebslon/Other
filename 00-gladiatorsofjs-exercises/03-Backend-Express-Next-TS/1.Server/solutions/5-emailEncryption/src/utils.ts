export interface Email {
  to: string;
  from: string;
  subject: string;
  body: string;
}

export const email: Email = {
  to: 'receiver@gmail.com',
  from: 'sender@gmail.com',
  subject: 'Hello',
  body: 'Hello World',
};
