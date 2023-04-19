import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import usersRoute from "./routes/usersRoute.js"
import movieRoute from "./routes/movieRoutes.js"
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
app.use('/movies',movieRoute );
app.use("/users",usersRoute)
app.listen(4000, () => console.log(`The server is listening on port ${process.env.PORT}`));
