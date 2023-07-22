import { faker } from '@faker-js/faker';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

function loginuser() {}
async function createProduct() {
  for (let index = 0; index < 100; index++) {
    const payload = {
      name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
      price: 3000,
      image: '',
    };
    const res = await axios
      .post(`${BASE_URL}/api/v1/product`, payload)
      .then((res) => res.data);
    console.log(res);
    // productModel.create(payload).then((res) => console.log(res));
  }
}

createProduct();
