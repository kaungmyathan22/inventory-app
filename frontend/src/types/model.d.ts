export interface ICategory {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: IPrice;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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

export interface IUser {
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
