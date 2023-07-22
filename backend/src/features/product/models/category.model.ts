import { model, Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    name: {
      type: String,
      index: 'text',
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const categoryModel = model('Category', categorySchema);
