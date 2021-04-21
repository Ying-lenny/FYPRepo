import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import './db.js';
import postRoutes from './routes/posts.js';
import usersRouter from './api/users/index.js';
import session from 'express-session';
import passport from './authenticate/index.js';

import cors from 'cors';

dotenv.config();

const errHandler = (err, req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cors());

app.use(express.static('public'));

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

  // initialise passport​
  app.use(passport.initialize());

  app.use(errHandler);

  app.use('/api/users', usersRouter);
  app.use('/posts', postRoutes);

  app.get('/', (req, res) => {
    res.send('Hello to Memories API');
  })

  app.listen(port, () => {
    console.info(`Server running at ${port}`);
  });

  // if (process.env.SEED_DB) {
  //   loadUsers();
  // }