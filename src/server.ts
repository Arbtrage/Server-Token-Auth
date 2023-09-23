import express, { Express } from "express";
import https from "https";
import fs from "fs";
import * as dotenv from "dotenv";
import { morganMiddleware } from "./middleware";
import { mongoose } from "./utils/index";
import Logger from "./lib/logger";
import { setupRoutes } from "./routes/index";
dotenv.config();

const app: Express = express();

//Middlewares
app.use(express.json({ limit: "10mb" }), morganMiddleware);
app.disable("x-powered-by");
//Middlewares

setupRoutes(app);

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const port = process.env.PORT || 3000;

mongoose
  .run()
  .then(() => {
    try {
      https
        .createServer(options, app)
        .listen(port, ()=>Logger.info(`server runs on port ${port}`));
    } catch (error) {
      Logger.error(error.message);
    }
  })
  .catch((error) => {
    Logger.error(error.message);
  });
