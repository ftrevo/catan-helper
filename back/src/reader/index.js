const { screen } = require('@nut-tree/nut-js');
const { configureScreen } = require('./configs');
const reader = require('./reader');

configureScreen(screen);

const execute = async () => {
  const board = await reader();
  return board;
};

module.exports = execute;
