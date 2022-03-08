import { Router } from "express";

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
}
