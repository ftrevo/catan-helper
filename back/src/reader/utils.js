const points = {
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 0,
  8: 5,
  9: 4,
  10: 3,
  11: 2,
  12: 1,
};

// prettier-ignore-start
const vertexNeighboardTiles = [
  [0], // V 0 (PRIMEIRO VÉRTICE DA PRIMEIRA LINHA)
  [1],
  [2],
  [0], // V 3 (PRIMEIRO VÉRTICE DA SEGUNDA LINHA)
  [0, 1],
  [1, 2],
  [2],
  [0, 3], // V 7 (PRIMEIRO VÉRTICE DA TERCEIRA LINHA)
  [0, 1, 4],
  [1, 2, 5],
  [2, 6],
  [3], // V 11 (PRIMEIRO VÉRTICE DA QUARTA LINHA)
  [0, 3, 4],
  [1, 4, 5],
  [2, 5, 6],
  [6],
  [3, 7], // V 16 (PRIMEIRO VÉRTICE DA QUITA LINHA)
  [3, 4, 8],
  [4, 5, 9],
  [5, 6, 10],
  [6, 11],
  [7], // V 21 (PRIMEIRO VÉRTICE DA SEXTA LINHA)
  [3, 7, 8],
  [4, 8, 9],
  [5, 9, 10],
  [6, 10, 11],
  [11],
  [7], // V 27 (PRIMEIRO VÉRTICE DA SÉTIMA LINHA)
  [7, 8, 12],
  [8, 9, 13],
  [9, 10, 14],
  [10, 11, 15],
  [11],
  [7, 12], // V 33 (PRIMEIRO VÉRTICE DA OITAVA LINHA)
  [8, 12, 13],
  [9, 13, 14],
  [10, 14, 15],
  [11, 15],
  [12], // V 38 (PRIMEIRO VÉRTICE DA NONA LINHA)
  [12, 13, 16],
  [13, 14, 17],
  [14, 15, 18],
  [15],
  [12, 16], // V 43 (PRIMEIRO VÉRTICE DA DÉCIMA LINHA)
  [13, 16, 17],
  [14, 17, 18],
  [15, 18],
  [16], // V 47 (PRIMEIRO VÉRTICE DA DÉCIMA PRIMEIRA LINHA)
  [16, 17],
  [17, 18],
  [18],
  [16], // V 51 (PRIMEIRO VÉRTICE DA DÉCIMA SEGUNDA LINHA)
  [17],
  [18],
];
// prettier-ignore-end

const getPlayerResources = (vertices = []) => {
  const players = {};

  vertices.forEach((vertex) => {
    const owner = vertex.owner;

    if (owner) {
      let playerData = players[owner];

      if (!playerData) {
        playerData = {
          resources: {
            production: 0,
          },
          buildings: {
            city: 0,
            settlement: 0,
          },
        };
        players[owner] = playerData;
      }

      playerData.buildings[vertex.building] += 1;

      vertex.tiles.forEach((tile) => {
        const resource = tile.resource;
        let playerResourceData = playerData.resources[resource];

        if (!playerResourceData) {
          playerResourceData = {
            production: 0,
            tiles: 0,
            numbers: [],
          };
          playerData.resources[resource] = playerResourceData;
        }

        const alreadyHasTile = playerResourceData.numbers.includes(tile.number);

        if (!alreadyHasTile) {
          playerResourceData.numbers = [
            ...new Set(playerResourceData.numbers).add(tile.number),
          ].sort((a, b) => parseInt(a) - parseInt(b));
          playerResourceData.tiles += 1;
          playerData.numbers = [
            ...new Set(playerData.numbers).add(tile.number),
          ].sort((a, b) => parseInt(a) - parseInt(b));
        }

        playerResourceData.production += tile.value;
        playerData.resources.production += tile.value;
      });
    }
  });

  return players;
};

const getResourceStatistics = (tiles = []) => {
  const response = tiles
    .filter((tile) => tile.resource !== 'desert')
    .reduce(
      (allResources, tile) => {
        return {
          ...allResources,
          [tile.resource]: allResources[tile.resource] + tile.value,
          total: allResources.total + tile.value,
        };
      },
      {
        total: 0,
        brick: 0,
        grain: 0,
        lumber: 0,
        ore: 0,
        wool: 0,
      }
    );

  Object.entries(response).forEach(([key, value]) => {
    if (key === 'total') return;
    const calculation = (value * 100) / response.total;

    response[key] = { value, odds: calculation.toFixed(2) };
  });
  return response;
};

const waitFor = (delay) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};

const roadConnections = [
  [3, 4], // Linha 0 - V0
  [4, 5],
  [5, 6],
  [7, 0], // Linha 1 - V3
  [0, 1, 8],
  [1, 2, 9],
  [2, 10],
  [3, 11, 12], // Linha 2 - V7
  [4, 12, 13],
  [5, 13, 14],
  [6, 14, 15],
  [7, 16], // Linha 3 - V11
  [7, 8, 17],
  [8, 9, 18],
  [9, 10, 19],
  [10, 20],
  [11, 21, 22], // Linha 4 - V16
  [12, 22, 23],
  [13, 23, 24],
  [14, 24, 25],
  [15, 25, 26],
  [16, 27], // Linha 5 - V21
  [16, 17, 28],
  [17, 18, 29],
  [18, 19, 30],
  [19, 20, 31],
  [20, 32],
  [21, 33], // Linha 6 - V27
  [22, 33, 34],
  [23, 34, 35],
  [24, 35, 36],
  [25, 36, 37],
  [36, 37],
  [27, 28, 38], // Linha 7 - V33
  [28, 29, 39],
  [29, 30, 40],
  [30, 31, 41],
  [31, 32, 42],
  [33, 43], // Linha 8 - V38
  [34, 43, 44],
  [35, 44, 45],
  [36, 45, 46],
  [37, 47],
  [38, 39, 47], // Linha 9 - V43
  [39, 40, 48],
  [40, 41, 49],
  [41, 42, 50],
  [43, 51], // Linha 10 - V47
  [44, 51, 52],
  [45, 52, 53],
  [46, 53],
  [47, 48], // Linha 11 - V51
  [48, 49],
  [49, 50],
];

module.exports = {
  vertexNeighboardTiles,
  roadConnections,
  points,
  getPlayerResources,
  getResourceStatistics,
  waitFor,
};
