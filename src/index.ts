import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const PORT = process.env.PORT;

const start = async () => {
  app.listen(3000, async () => {
    console.log(`🚀 server listening on port ${PORT}...`);
  });
};

start();
