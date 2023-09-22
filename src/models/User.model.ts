import mongoose, { Schema, Model } from 'mongoose'
import { UserDocument } from '../types'
import bcrypt from 'bcrypt'


const userSchema = new Schema<UserDocument>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Length must be greater than 6'],
  },
  name: {
    type: String,
    required: true
  },
}, {timestamps:true})

userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10)
    }
    next()
  } catch (error) {
    next(error)
  }
})

const UserModel:Model<UserDocument> = mongoose.model<UserDocument>('Users', userSchema)

export default UserModel;