import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      index: 'text',
    },
    price: {
      type: Number,
    },
    image: String,
  },
  {
    timestamps: true,
  },
);

export const productModel = model('Product', productSchema);
