const { screen, imageResource } = require('@nut-tree/nut-js');
const { tiles: screenTiles, vertices } = require('./tiles');
const { waitFor } = require('./utils');
const getBoard = require('./board');

require('@nut-tree/template-matcher');

const numbers = [
  'number/2.png',
  'number/3.png',
  'number/4.png',
  'number/5.png',
  'number/6.png',
  'number/7.png', // Deserto
  'number/8.png',
  'number/9.png',
  'number/10.png',
  'number/11.png',
  'number/12.png',
];

const resources = [
  'resources/brick.png',
  'resources/desert.png',
  'resources/grain.png',
  'resources/lumber.png',
  'resources/ore.png',
  'resources/wool.png',
];

const buildings = [
  'buildings/black_city.png',
  'buildings/black_settlement.png',
  'buildings/blue_city.png',
  'buildings/blue_settlement.png',
  'buildings/green_city.png',
  'buildings/green_settlement.png',
  'buildings/mystiqueblue_city.png',
  'buildings/mystiqueblue_settlement.png',
  'buildings/red_city.png',
  'buildings/red_settlement.png',
  'buildings/orange_city.png',
  'buildings/orange_settlement.png',
];

const findByImageName = async (
  imageName,
  searchRegion,
  searchMultipleScales = false,
  confidence = 0.98
) => {
  await screen.find(imageResource(imageName), {
    searchRegion,
    searchMultipleScales,
    confidence,
  });

  return imageName.split('/')[1].split('.')[0].split('-')[0];
};

const findNumbers = async (regionToBeFound) => {
  const promiseList = numbers.map((singleNumber) =>
    findByImageName(singleNumber, regionToBeFound)
  );

  try {
    const resolvedPromise = await Promise.any(promiseList);

    return resolvedPromise;
  } catch (e) {
    console.log(e);
  }
};

const findResources = async (regionToBeFound) => {
  const promiseList = resources.map((resource) =>
    findByImageName(resource, regionToBeFound)
  );

  try {
    const resolvedPromise = await Promise.any(promiseList);

    return resolvedPromise;
  } catch (e) {
    console.log(e);
  }
};

const findBuildings = async (regionToBeFound, vertexNumber) => {
  // await screen.highlight(regionToBeFound)
  const promiseList = buildings.map((building) =>
    findByImageName(building, regionToBeFound)
  );

  try {
    const resolvedPromise = await Promise.any(promiseList);

    return resolvedPromise;
  } catch (e) {
    // console.log('No building found on vertex', vertexNumber)
  }
};

const getTileData = async (tile) => {
  const found = {};

  const resourceFound = await findResources(tile);

  if (resourceFound) {
    found.resource = resourceFound;
  }

  const numberFound = await findNumbers(tile);

  if (numberFound) {
    found.number = numberFound;
  }

  return found;
};

const getVerticesData = async (vertex, position) => {
  const found = { position };
  const buildingFound = await findBuildings(vertex, position);

  if (buildingFound) {
    const [owner, building] = buildingFound.split('_');

    found.owner = owner;
    found.building = building;
  }

  return found;
};

const execute = async () => {
  await waitFor(3000);
  const tilePromiseList = screenTiles.map((tile) => getTileData(tile));
  const resultingTiles = await Promise.all(tilePromiseList);

  const verticesPromiseList = vertices.map(getVerticesData);
  const resultingVertices = await Promise.all(verticesPromiseList);

  return getBoard(resultingTiles, resultingVertices);
};

module.exports = execute;
