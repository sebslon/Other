export interface Email {
  from: string;
  to: string;
  title: string;
  cc?: string[];
  bcc?: string[];
  html: string;
}