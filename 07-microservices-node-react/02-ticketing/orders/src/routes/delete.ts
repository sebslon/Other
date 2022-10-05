import express, { Request, Response } from 'express';

const router = express.Router();

router.delete('/api/orders/:orderId', async (req: Request, res: Response) => {
  res.send('Hi there');
});

export { router as deleteOrderRouter };
