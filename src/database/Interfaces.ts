interface Database {
  getProduct: (id: Number) => Promise<Product>,
  addReview: (id: Number, newAvg: Number, newTotal: Number ) => Promise<Number>,
}

interface Product {
  id: Number,
  name: String,
  miniDescription: String,
  price: Number,
  dealLen: String,
  regPrice: String,
  reviewAvg: Number,
  reviewCount: Number,
  benefit: String,
  size: String,
  color: String,
  mattress: String,
  legs: String,
  slattedBedBase: String,
  ikeaFamilySale: String,
  onSale: Boolean,
  new: Boolean,
  notQuitePerfect: Boolean,
  availableForDelivery: Boolean,
  assembly: Boolean,
  soldSeparate: String,
}

export { Database, Product };