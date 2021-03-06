// Debug Coordinates
const atvLong1 = 33.848222;
const atvLong2 = 33.848934;
const atvLat1 = -84.373869;
const atvLat2 = -84.372852;

let randomFloatInRange = (min, max) =>
  Math.random() * (max - min) + min;

let generateCoordinates = () => {
  let coordinates = {
    longitude: randomFloatInRange(atvLong1, atvLong2),
    latitude: randomFloatInRange(atvLat1, atvLat2)
  };
  return coordinates;
};

module.exports = {
  generateCoordinates
};