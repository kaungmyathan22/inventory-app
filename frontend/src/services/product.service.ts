import api from "@/lib/axios";
import { IProduct } from "@/types/model";
export interface IProductListResponse {
  pagination: Pagination;
  items: Item[];
  message: string;
}

export interface ITransformedProductList {
  pagination: Pagination;
  items: IProduct[];
  message: string;
}

export interface Pagination {
  count: number;
  currentPage: number;
  nextPage: number;
  totalItems: number;
  totalPages: number;
  rowsPerPage: number;
}
export interface Item {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export class ProductService {
  static async getAllProducts(page: number): Promise<ITransformedProductList> {
    const result: IProductListResponse = (await api
      .get(`/product?page=${page}`)
      .then((res) => res.data)) as IProductListResponse;
    const transformedResult: ITransformedProductList = {
      ...result,
      items: (result.items || []).map((item) => ({
        ...item,
        id: item._id,
        price: {
          amount: item.price,
          currency: "Ks",
          prepend: true,
        },
      })),
    };
    return transformedResult;
  }
}
