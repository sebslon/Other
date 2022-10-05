import request from 'supertest';
import { OrderStatus } from '@msvcs/common';

import { app } from '../../app';

import { Ticket } from '../../models/ticket';
import { AuthTestHelper } from '../../tests-configs/auth-test-helper';

describe('Delete order router', () => {
  it('Marks an order as cancelled', async () => {
    const ticket = await Ticket.build({
      title: 'concert',
      price: 20,
    }).save();

    const user = await AuthTestHelper.signin();

    const { body: order } = await request(app)
      .post('/api/orders')
      .set('Cookie', user)
      .send({ ticketId: ticket.id })
      .expect(201);

    await request(app)
      .delete(`/api/orders/${order.id}`)
      .set('Cookie', user)
      .expect(204);

    const response = await request(app)
      .get(`/api/orders/${order.id}`)
      .set('Cookie', user)
      .expect(200);

    expect(response.body.status).toEqual(OrderStatus.Cancelled);
  });

  it.todo('Emits an order cancelled event');
});
