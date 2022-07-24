import { Request, Response } from "express";

import { ILogData } from "../types";
import { webhook } from "../services/webhook";

export class WebhookController {
  async logAction(req: Request<{}, {}, ILogData<string>>, res: Response) {
    const { action, data } = req.body;

    const result = await webhook.log({ action, data });

    return res.status(200).json(result);
  }
}