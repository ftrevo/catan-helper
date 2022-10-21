const express = require('express');

const reader = require('./reader');
const { getPlayerResources, getResourceStatistics } = require('./reader/utils');

const { game } = require('../mocks/game');

const app = express();
app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Server is up');
});

app.get('/board', async (_req, res) => {
  console.log('/board called', new Date().toISOString());
  const board = await reader();

  const playerData = getPlayerResources(board.vertices);
  const statistics = getResourceStatistics(board.tiles);

  res
    .set('Access-Control-Allow-Origin', '*')
    .send({ board, playerData, statistics });
});

app.get('/mock', async (_req, res) => {
  console.log('/mock called', new Date().toISOString());
  res.set('Access-Control-Allow-Origin', '*').send(game);
});

module.exports = app;
