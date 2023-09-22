import { connect, connection } from 'mongoose'
import Logger from '../lib/logger';

export const mongoose = {
  run: async () => {
    try {
      await connect(process.env.MONGO_URL)
      Logger.info("Database Connected");
      return ;
    } catch (error) {
      Logger.error(error)
    }
  },

  stop: async () => {
    try {
      return await connection.destroy()
    } catch (error) {
      Logger.error(error)
    }
  }
}