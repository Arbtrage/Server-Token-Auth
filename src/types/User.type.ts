import { Document } from 'mongoose'

export interface User {
  email: string;
  password: string;
  name: string;
}

export interface UserDocument extends User, Document{}