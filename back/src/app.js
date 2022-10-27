const express = require('express');

const reader = require('./reader');
const { getPlayerResources, getResourceStatistics } = require('./reader/utils');

const { game } = require('../mocks/game');

const app = express();
app.use(express.json());

app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, ngrok-skip-browser-warning'
  );
  next();
});

app.get('/', async (_req, res) => {
  res.send('Server is up');
});

app.get('/board', async (_req, res) => {
  console.log('/board called', new Date().toISOString());
  const board = await reader();

  const playerData = getPlayerResources(board.vertices);
  const statistics = getResourceStatistics(board.tiles);

  res.send({ board, playerData, statistics });
});

app.get('/mock', async (_req, res) => {
  console.log('/mock called', new Date().toISOString());
  res.send(game);
});

module.exports = app;
