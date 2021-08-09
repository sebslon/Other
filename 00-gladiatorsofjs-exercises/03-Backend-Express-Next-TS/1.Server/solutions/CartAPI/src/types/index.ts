import { Router } from 'express';

import { Cart } from '../models/memory/Cart';

export interface Controller {
  path: string;
  router: Router;
}

export interface Repository<T> {
  getAll: () => T[];
  getById: (id: string) => T | undefined;
  delete: (id: string) => void;
  create: (item: T) => void;
  update: (item: T) => void;
};

export interface CartRepository extends Repository<Cart> {};
