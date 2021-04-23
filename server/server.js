import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './db.js';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
dotenv.config();

const app = express();

const port = process.env.PORT

//configure body-parser
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

  app.use('/posts', postRoutes);
  app.use("/user", userRouter);

  app.listen(port, () => {
    console.info(`Server running at ${port}`);
  });

