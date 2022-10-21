const { Region } = require('@nut-tree/nut-js');

const width = 134;
const height = 135;

const firstLineTop = 245;
const firstLineLeft = 516;

const secondLineTop = 360;
const secondLineLeft = 446;

const thirdLineTop = 475;
const thirdLineLeft = 380;

const fourthLineTop = 590;
const fourthLineLeft = 446;

const fifhtLineTop = 705;
const fifhtLineLeft = 516;

const tiles = [
  new Region(firstLineLeft, firstLineTop, width, height),
  new Region(firstLineLeft + width, firstLineTop, width, height),
  new Region(firstLineLeft + 2 * width, firstLineTop, width, height),
  new Region(secondLineLeft, secondLineTop, width, height),
  new Region(secondLineLeft + width, secondLineTop, width, height),
  new Region(secondLineLeft + 2 * width, secondLineTop, width, height),
  new Region(secondLineLeft + 3 * width, secondLineTop, width, height),
  new Region(thirdLineLeft, thirdLineTop, width, height),
  new Region(thirdLineLeft + width, thirdLineTop, width, height),
  new Region(thirdLineLeft + 2 * width, thirdLineTop, width, height),
  new Region(thirdLineLeft + 3 * width, thirdLineTop, width, height),
  new Region(thirdLineLeft + 4 * width, thirdLineTop, width, height),
  new Region(fourthLineLeft, fourthLineTop, width, height),
  new Region(fourthLineLeft + width, fourthLineTop, width, height),
  new Region(fourthLineLeft + 2 * width, fourthLineTop, width, height),
  new Region(fourthLineLeft + 3 * width, fourthLineTop, width, height),
  new Region(fifhtLineLeft, fifhtLineTop, width, height),
  new Region(fifhtLineLeft + width, fifhtLineTop, width, height),
  new Region(fifhtLineLeft + 2 * width, fifhtLineTop, width, height),
];

const vertexWidth = 65;
const vertexHeight = 65;

const vertices = [
  new Region(547, 202, vertexWidth, vertexHeight),
  new Region(680, 202, vertexWidth, vertexHeight),
  new Region(813, 202, vertexWidth, vertexHeight),
  new Region(485, 240, vertexWidth, vertexHeight),
  new Region(618, 240, vertexWidth, vertexHeight),
  new Region(751, 240, vertexWidth, vertexHeight),
  new Region(879, 240, vertexWidth, vertexHeight),
  new Region(485, 312, vertexWidth, vertexHeight),
  new Region(613, 312, vertexWidth, vertexHeight),
  new Region(746, 312, vertexWidth, vertexHeight),
  new Region(879, 312, vertexWidth, vertexHeight),
  new Region(415, 350, vertexWidth, vertexHeight),
  new Region(547, 350, vertexWidth, vertexHeight),
  new Region(680, 350, vertexWidth, vertexHeight),
  new Region(813, 350, vertexWidth, vertexHeight),
  new Region(946, 350, vertexWidth, vertexHeight),
  new Region(415, 432, vertexWidth, vertexHeight),
  new Region(547, 432, vertexWidth, vertexHeight),
  new Region(679, 432, vertexWidth, vertexHeight),
  new Region(811, 432, vertexWidth, vertexHeight),
  new Region(943, 432, vertexWidth, vertexHeight),
  new Region(354, 465, vertexWidth, vertexHeight),
  new Region(485, 465, vertexWidth, vertexHeight),
  new Region(616, 465, vertexWidth, vertexHeight),
  new Region(747, 465, vertexWidth, vertexHeight),
  new Region(878, 465, vertexWidth, vertexHeight),
  new Region(1009, 465, vertexWidth, vertexHeight),
  new Region(355, 545, vertexWidth, vertexHeight),
  new Region(486, 545, vertexWidth, vertexHeight),
  new Region(617, 545, vertexWidth, vertexHeight),
  new Region(748, 545, vertexWidth, vertexHeight),
  new Region(879, 545, vertexWidth, vertexHeight),
  new Region(1010, 545, vertexWidth, vertexHeight),
  new Region(415, 580, vertexWidth, vertexHeight),
  new Region(547, 580, vertexWidth, vertexHeight),
  new Region(679, 580, vertexWidth, vertexHeight),
  new Region(811, 580, vertexWidth, vertexHeight),
  new Region(943, 580, vertexWidth, vertexHeight),
  new Region(415, 661, vertexWidth, vertexHeight),
  new Region(547, 661, vertexWidth, vertexHeight),
  new Region(679, 661, vertexWidth, vertexHeight),
  new Region(811, 661, vertexWidth, vertexHeight),
  new Region(943, 661, vertexWidth, vertexHeight),
  new Region(485, 696, vertexWidth, vertexHeight),
  new Region(613, 696, vertexWidth, vertexHeight),
  new Region(746, 696, vertexWidth, vertexHeight),
  new Region(879, 696, vertexWidth, vertexHeight),
  new Region(485, 774, vertexWidth, vertexHeight),
  new Region(613, 774, vertexWidth, vertexHeight),
  new Region(746, 774, vertexWidth, vertexHeight),
  new Region(879, 774, vertexWidth, vertexHeight),
  new Region(547, 810, vertexWidth, vertexHeight),
  new Region(680, 810, vertexWidth, vertexHeight),
  new Region(813, 810, vertexWidth, vertexHeight),
];

module.exports = {
  tiles,
  vertices,
};
