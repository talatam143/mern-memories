import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"
import dotenv from "dotenv"

const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended:"true"}));
app.use(express.urlencoded({limit: "30mb", extended:"true"}));

app.use(cors());

app.use("/posts", postRoutes);

const URL= "mongodb+srv://ryuzaki:ryuzaki143@cluster0.dhped.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.set("useFindAndModify", false);

app.listen(PORT, function (err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("server Started")
    }
})