import { faker } from '@faker-js/faker';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

async function createProduct() {
  for (let ii = 0; ii < 10; ii++) {
    const payload = {
      name: `${faker.commerce.department()} ${ii}`,
    };
    const category = await axios
      .post(`${BASE_URL}/api/v1/product/category`, payload)
      .then((res) => res.data);
    console.log({ category });
    for (let index = 0; index < 10; index++) {
      const payload = {
        name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        price: 3000,
        image: '',
        category: category.id,
      };
      const res = await axios
        .post(`${BASE_URL}/api/v1/product`, payload)
        .then((res) => res.data);
      console.log(res);
    }
    // productModel.create(payload).then((res) => console.log(res));
  }
}

createProduct();
