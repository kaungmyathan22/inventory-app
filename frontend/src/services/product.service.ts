import api from "@/lib/axios";

export class ProductService {
  static getAllProducts() {
    return api.get("/product");
  }
}
