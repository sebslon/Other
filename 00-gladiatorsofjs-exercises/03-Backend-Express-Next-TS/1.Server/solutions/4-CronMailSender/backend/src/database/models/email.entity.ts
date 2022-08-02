export interface Email {
  id: number;
  receiver: string;
  subject: string;
  content: string;
  html: string;
  timesVisited: number;
  active: boolean;
}
