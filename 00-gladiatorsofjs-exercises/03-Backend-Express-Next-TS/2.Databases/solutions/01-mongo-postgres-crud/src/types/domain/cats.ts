export interface ICat {
  name: string;
  sex: CatSex;
  colour: string;
  age: number;
}

export type CatSex = 'Felix' | 'Felicia';
