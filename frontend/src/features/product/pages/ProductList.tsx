import { Chip } from "@/shared/Chip";
import { ICategory, IProduct } from "@/types/model";
import { ProductItem } from "../components/ProductItem";

const ProductList = () => {
  const products: IProduct[] = Array(20)
    .fill(0)
    .map((_, i) => ({
      image: "",
      id: `${i}`,
      name: `Couple Shoes 2021 New One Man and One Woman Spring Korean ${i}`,
      price: {
        amount: 3000 * i + 1,
        prepend: true,
        currency: "Ks",
      },
    }));
  const categories: ICategory[] = Array(20)
    .fill(0)
    .map((_, i) => ({ id: `${i}`, name: `Category ${i}` }));
  return (
    <div>
      <div className="flex flex-wrap mt-8 gap-2 pb-6">
        <Chip
          key={0}
          category={{
            id: `${Date.now()}`,
            name: "All",
          }}
        />
        {categories.map((category) => (
          <Chip key={category.id} category={category} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 lg:grid-cols-6 gap-x-2 gap-y-2">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
