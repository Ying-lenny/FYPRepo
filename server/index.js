import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import './db';
import {loadUsers} from './seedData'

dotenv.config();

const app = express();

const port = process.env.PORT
// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello  World!');
});

if (process.env.SEED_DB) {
  loadUsers();
}

const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
  };

  app.use(errHandler);

  app.use(bodyParser.json())

  server.listen(port);

  // Put a friendly message on the terminal
  console.log(`Server running at ${port}`);