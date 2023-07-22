import bcryptjs from 'bcryptjs';
import { model, Schema } from 'mongoose';

export interface IUser {
  email: string;
  id: string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
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

UserSchema.pre('save', async function () {
  if (this.password) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
});

export const UserModel = model('User', UserSchema);
