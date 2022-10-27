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

const getVertex = ({ owner, building, position, neighbors }, tiles) => {
  return {
    position,
    owner,
    building,
    tiles, // TODO ver se posso remover o tiles
    neighbors, // TODO remover antes de retornar para o front
    value: tiles.reduce((currentSum, tile) => currentSum + tile.value, 0),
  };
};

const hasBuildingsOnNeighbors = (neighbors, vertices) => {
  return neighbors
    .map((position) => vertices[position])
    .some((vertex) => vertex.owner);
};

const getBoard = (informedTiles, informedVertices) => {
  const tiles = informedTiles.map((singleTile, index) =>
    getTile(singleTile, index)
  );
  const vertices = informedVertices.map((vertex, index) =>
    getVertex(vertex, getVertexTiles(vertexNeighboardTiles[index], tiles))
  );

  vertices.forEach((vertex, index) => {
    vertices[index].buildingNeighbor = hasBuildingsOnNeighbors(
      vertex.neighbors,
      vertices
    );
  });

  return {
    tiles,
    vertices,
  };
};

module.exports = getBoard;
