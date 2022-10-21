const { points, vertexNeighboardTiles } = require('./utils');

const getVertexTiles = (adjacentPositions, tiles) => {
  return adjacentPositions.map((tilePosition) => tiles[tilePosition]);
};

const getTile = ({ number, resource }, position) => {
  return {
    position,
    resource,
    number,
    value: points[number],
  };
};

const getVertex = ({ owner, building, position }, tiles) => {
  return {
    position,
    owner,
    building,
    tiles,
    value: tiles.reduce((currentSum, tile) => currentSum + tile.value, 0),
  };
};

const getBoard = (informedTiles, informedVertices) => {
  const tiles = informedTiles.map((singleTile, index) =>
    getTile(singleTile, index)
  );
  const vertices = informedVertices.map((vertex, index) =>
    getVertex(vertex, getVertexTiles(vertexNeighboardTiles[index], tiles))
  );

  return {
    tiles,
    vertices,
  };
};

module.exports = getBoard;
