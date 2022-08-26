export type ICat = IMongoCat & IPostgresCat;

export interface IMongoCat extends ICommonCat {
  id: string;
}

export interface IPostgresCat extends ICommonCat {
  id: number;
}

export interface ICommonCat {
  name: string;
  sex: CatSex;
  colour: string;
  age: number;
  common_id: string;
}

export type CatSex = 'Felix' | 'Felicia';
