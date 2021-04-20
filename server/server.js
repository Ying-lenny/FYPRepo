import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import './db';
import usersRouter from './api/users'
import {loadUsers} from './seedData'
import session from 'express-session';
import passport from './authenticate';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
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

  app.listen(port, () => {
    console.info(`Server running at ${port}`);
  });

  // if (process.env.SEED_DB) {
  //   loadUsers();
  // }