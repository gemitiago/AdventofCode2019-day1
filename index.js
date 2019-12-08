const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');

const calcSumFuelPart1 = arraySpacecraftModules => {
  return arraySpacecraftModules.reduce((acc, n) => {
    return acc + parseInt((Number(n) / 3).toString()) - 2;
  }, 0);
};

const calcFuel = spacecraftModule => {
  let auxRes = parseInt((Number(spacecraftModule) / 3).toString()) - 2;
  let res = auxRes;

  while (auxRes >= 0) {
    auxRes = parseInt((auxRes / 3).toString()) - 2;
    if (auxRes >= 0) {
      res += auxRes;
    }
  }

  return res;
};

const calcSumFuel = arraySpacecraftModules => {
  return arraySpacecraftModules.reduce((acc, n) => {
    return acc + calcFuel(n);
  }, 0);
};

console.log(calcSumFuelPart1(input));
console.log(calcSumFuel(input));
