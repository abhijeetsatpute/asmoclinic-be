import { PORT } from "./config";
import { createApp } from "./createApp";
import { db } from "./database";

const app = createApp();

const start = async () => {
  try {
    await db.sync();
    app.listen(PORT, async () => {
      console.log(`Running on Port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
