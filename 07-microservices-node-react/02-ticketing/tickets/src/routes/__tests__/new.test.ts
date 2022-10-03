import request from 'supertest';

import { app } from '../../app';

describe('New Ticket', () => {
  it('Has a route handler listening to /api/tickets for post requests', async () => {});

  it('Can only be accessed if the user is signed in', async () => {});

  it('Returns an error if an invalid title is provided', () => {});

  it('Returns an error if an invalid price is provided', () => {});

  it('Creates a ticket with valid inputs', () => {});
});
