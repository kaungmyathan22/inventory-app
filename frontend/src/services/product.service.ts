import api from "@/lib/axios";
import { ICategory, IProduct } from "@/types/model";
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
  static async getAllProducts(
    page: number,
    query: string,
    categories: string
  ): Promise<ITransformedProductList> {
    const result: IProductListResponse = (await api
      .get(
        `/product?page=${page}&searchKeywords=${query}&categories=${categories}`
      )
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

  static categories(): Promise<ICategory[]> {
    return api.get("/product/category").then((res) => res.data);
  }
}
