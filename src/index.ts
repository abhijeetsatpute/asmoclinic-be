import { PORT } from "./config";
import { createApp } from "./createApp";
import { db } from "./database";

const app = createApp();

app.listen(PORT, async () => {
  await db.sync({ alter: false });
  console.log(`Running on Port ${PORT}`);
});
