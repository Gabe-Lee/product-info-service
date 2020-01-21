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
  mini_description: string;
  price: number;
  deal_len: string;
  reg_price: string;
  review_avg: number;
  review_count: number;
  description: string;
  size: string;
  color: string;
  mattress: string;
  legs: string;
  slatted_bed_base: string;
  ikea_family_sale: string;
  on_sale: boolean;
  is_new: boolean;
  not_quite_perfect: boolean;
  available_for_delivery: boolean;
  assembly: boolean;
  sold_separate: string;
}
const TProduct: { [index: string]: string } = {
  id: 'number',
  name: 'string',
  mini_description: 'string',
  price: 'number',
  deal_len: 'string',
  reg_price: 'string',
  review_avg: 'number',
  review_count: 'number',
  description: 'string',
  size: 'string',
  color: 'string',
  mattress: 'string',
  legs: 'string',
  slatted_bed_base: 'string',
  ikea_family_sale: 'boolean',
  on_sale: 'boolean',
  is_new: 'boolean',
  not_quite_perfect: 'boolean',
  available_for_delivery: 'boolean',
  assembly: 'boolean',
  sold_separate: 'string'
};

export { Database, Product, TProduct };
