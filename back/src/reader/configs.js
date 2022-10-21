const { Region } = require('@nut-tree/nut-js');

const gameRegion = new Region(165, 135, 1100, 820);

const configureScreen = (screen) => {
  screen.config.resourceDirectory = './sources'; // caminho da raiz do projeto
  // screen.config.autoHighlight = true
  screen.config.highlightOpacity = 0.7;
  // screen.config.highlightDurationMs = 200
};

module.exports = {
  gameRegion,
  configureScreen,
};
