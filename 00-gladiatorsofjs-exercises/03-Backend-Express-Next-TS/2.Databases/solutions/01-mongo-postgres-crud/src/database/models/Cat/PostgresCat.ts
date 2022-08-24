import { CatSex, ICat } from './Cat';

export class PostgresCat implements ICat {
  name!: string;
  sex!: CatSex;
  colour!: string;
  age!: number;
}
