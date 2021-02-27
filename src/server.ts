import dotenv from "dotenv";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

const app = new Koa();

dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

app.use(async (ctx) => {
  ctx.body = { message: "Hello World" };
});

app.listen(3000, async () => {
  console.log(`🚀 server listening on port ${PORT}...`);
});
