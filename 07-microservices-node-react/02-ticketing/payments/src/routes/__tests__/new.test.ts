import request from 'supertest';
import mongoose from 'mongoose';
import { OrderStatus } from '@msvcs/common';

import { app } from '../../app';

import { AuthTestHelper } from '../../tests-configs/auth-test-helper';

import { Order } from '../../models/order';

describe('New payment route', () => {
  it('Returns a 404 when purchasing an order that does not exist', async () => {
    await request(app)
      .post('/api/payments')
      .set('Cookie', await AuthTestHelper.signin())
      .send({
        token: 'asdf',
        orderId: new mongoose.Types.ObjectId().toHexString(),
      })
      .expect(404);
  });

  it("Returns a 401 when purchasing an order that doesn't belong to the user", async () => {
    const order = await Order.build({
      id: new mongoose.Types.ObjectId().toHexString(),
      userId: new mongoose.Types.ObjectId().toHexString(),
      version: 0,
      price: 20,
      status: OrderStatus.Created,
    }).save();

    await request(app)
      .post('/api/payments')
      .set('Cookie', await AuthTestHelper.signin())
      .send({
        token: 'asdf',
        orderId: order.id,
      })
      .expect(401);
  });

  it('Returns a 400 when purchasing a cancelled order', async () => {
    const userId = new mongoose.Types.ObjectId().toHexString();

    const order = await Order.build({
      id: new mongoose.Types.ObjectId().toHexString(),
      userId,
      version: 0,
      price: 20,
      status: OrderStatus.Cancelled,
    }).save();

    await request(app)
      .post('/api/payments')
      .set('Cookie', await AuthTestHelper.signin(userId))
      .send({
        token: 'asdf',
        orderId: order.id,
      })
      .expect(400);
  });
});
