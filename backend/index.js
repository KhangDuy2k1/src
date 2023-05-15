import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import post from "./routes/postRouter.js"
import * as dotenv from 'dotenv' 
const app = express();
dotenv.config()
const url =process.env.URL;
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true, limit: "30mb"}));
app.use(cors());
app.use("/post", post);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
        console.log("da ket noi thanh cong")
  })
  .catch(err => console.log('Lỗi khi kết nối tới cơ sở dữ liệu:', err));
  app.listen(port , () => { 
    console.log(`server is running on Port ${port}`)
})