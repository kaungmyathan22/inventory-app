export interface ICategory {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: IPrice;
}

export interface IPrice {
  amount: number;
  currency: string;
  prepend: boolean;
}

export interface ICartItem {
  id: string;
  quantity: number;
  product: IProduct;
}
