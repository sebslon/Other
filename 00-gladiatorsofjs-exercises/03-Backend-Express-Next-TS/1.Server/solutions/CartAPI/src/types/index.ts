import { Router } from 'express';

export interface Controller {
  path: string;
  router: Router;
}

export interface Repository {
  getCart: (id: string) => Cart | undefined;
};

export interface Cart {
  id: string;
  products: any[];
};