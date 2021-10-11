export interface ISearchData {
  name: string;
  regularPrice: number;
  salePrice: number;
}

export const searchData: ISearchData[] = [
  {
      name:"Fixed TOC - table of contents for WordPress plugin",
      regularPrice: 20,
      salePrice: 3.99
  },
  {
      name:"Jobify - The Most Popular WordpPress Job Board Theme",
      regularPrice: 59,
      salePrice: 3.99
  },
  {
      name:"Lorem ipsum",
      regularPrice: 99,
      salePrice: 21,
  },
  {
      name:"Lorem ipsum dolor sit amet",
      regularPrice: 19,
      salePrice: 2,
  },
  {
      name:"Dropdown item",
      regularPrice: 50,
      salePrice: 21,
  },
  {
      name:"World of Wordpress",
      regularPrice: 99,
      salePrice: 21,
  }
]