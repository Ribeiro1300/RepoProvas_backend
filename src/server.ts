/* eslint-disable @typescript-eslint/no-unused-vars */
import app, { init } from "./app";

const port = +process.env.PORT || 4000;

init().then(() => {
  app.listen(port, () => {
    console.log("Server running on port " + process.env.PORT);
    console.log("database url " + process.env.DATABASE_URL);
  });
});
