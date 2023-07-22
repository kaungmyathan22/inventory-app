import { model, Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id; // Exclude _id field
      },
    },
  },
);

categorySchema.virtual('id').get(function () {
  return this._id;
});

export const categoryModel = model('Category', categorySchema);
