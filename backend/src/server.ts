import app from "./app.ts";
import env from "./util/validateEnv.ts";
import mongoose from "mongoose";

const port = env.PORT;


mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose connected successfully");
    app.listen(port, () => {
      console.log("Server is running on port: " + port);
    });
  })
  .catch(console.error);
