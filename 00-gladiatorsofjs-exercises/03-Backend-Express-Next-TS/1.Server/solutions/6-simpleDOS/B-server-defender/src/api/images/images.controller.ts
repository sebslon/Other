import { Response, Request } from 'express';

import { imagesService } from './images.service';

export class ImagesController {
  static sendFirstImage(req: Request, res: Response) {
    const image = imagesService.getFirstImage();

    res.sendFile(image);
  }

  static sendSecondImage(req: Request, res: Response) {
    const image = imagesService.getSecondImage();

    res.sendFile(image);
  }
}
