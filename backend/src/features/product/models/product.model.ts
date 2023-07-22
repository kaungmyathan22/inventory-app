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
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

export const productModel = model('Product', productSchema);
