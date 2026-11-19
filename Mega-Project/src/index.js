import dotenv from "dotenv";
import connectDB from "./config/db.js";

import app from "./app.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 4000;

import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Run At http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database not Connected!", err);
  });
