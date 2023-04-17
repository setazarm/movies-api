import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Movie from "./models/moveSchema.js"
import cors from "cors"
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json())

mongoose
    .connect(
         process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }
        

        ,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Database connected! '))
    .catch((err) => console.log('Database is not connected! ', err.message));

app.listen(3001, () => console.log(`The server is listening on port ${process.env.PORT}`));