import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConfig.ts";
import shortUrl from "./routes/shortUrl.ts";
dotenv.config();

connectDB();

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http//:localhost:300",
    credentials: true,
  })
);

app.use("/api/", shortUrl);

app.listen(port, () => {
  console.log("app.listen ~ port: ", port);
});
