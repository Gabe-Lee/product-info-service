interface Database {
  getProduct: (id: number) => Promise<Product>;
  addProduct: (product: Product) => Promise<number>;
  replaceProduct: (id: number, newProduct: Product) => Promise<number>;
  deleteProduct: (id: number) => Promise<number>;
  addReview: (id: number, newReview: number) => Promise<number>;
  deleteReview: (id: number, oldReview: number) => Promise<number>;
  beginTest: (savePoint?: string) => Promise<number>;
  endTest: (savePoint?: string) => Promise<number>;
}

interface Product {
  [index: string]: number | string | boolean;
  id: number;
  name: string;
  minidescription: string;
  price: number;
  deallen: string;
  regprice: string;
  reviewavg: number;
  reviewcount: number;
  benefit: string;
  size: string;
  color: string;
  mattress: string;
  legs: string;
  slattedbedbase: string;
  ikeafamilysale: string;
  onsale: boolean;
  new: boolean;
  notquiteperfect: boolean;
  avaliablefordelivery: boolean;
  assembly: boolean;
  soldseparate: string;
}
const TProduct: {[index: string]: string} = {
  id: 'number',
  name: 'string',
  minidescription: 'string',
  price: 'number',
  deallen: 'string',
  regprice: 'string',
  reviewavg: 'number',
  reviewcount: 'number',
  benefit: 'string',
  size: 'string',
  color: 'string',
  mattress: 'string',
  legs: 'string',
  slattedbedbase: 'string',
  ikeafamilysale: 'boolean',
  onsale: 'boolean',
  new: 'boolean',
  notquiteperfect: 'boolean',
  avaliablefordelivery: 'boolean',
  assembly: 'boolean',
  soldseparate: 'string',
};

export { Database, Product, TProduct };
