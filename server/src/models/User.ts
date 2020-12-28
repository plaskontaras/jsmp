import { Schema, Document, Model, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  email?: string;
  password?: string;
}

export interface IUserModel extends IUser, Document {
  isValidPassword(next: string): string;
}

export const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', async function <IUserModel>(next: any) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password: string) {
  const compare = await bcrypt.compare(password, this.password);

  return compare;
};

const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);
export default User;
