/* eslint-disable @typescript-eslint/no-unused-vars */
import app, { init } from "./app";

const port = process.env.PORT;

init().then(() => {
  app.listen(port, () => {
    console.log("Server running on port " + port);
    console.log("database url " + process.env.DATABASE_URL);
  });
});
