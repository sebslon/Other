import path from 'path';
import fs from 'fs';

export class ImagesService {
  getFirstImage() {
    const pathToImage = path.join(__dirname, 'files/easy.jpeg');

    return pathToImage;
  }

  getSecondImage() {
    const pathToImage = path.join(__dirname, 'files/easy-2.jpeg');

    return pathToImage;
  }
}

export const imagesService = new ImagesService();
