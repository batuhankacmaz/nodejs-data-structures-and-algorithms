// GAS STATION
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  const leftOver = [];

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    leftOver[i] = gas[i] - cost[i];
  }
  if (totalGas < totalCost) return -1;
  let currentGas = 0;
  let start = 0;

  //leftOver[start] >=0
  for (let i = 0; i < leftOver.length; i++) {
    currentGas += leftOver[i];
    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }
  return start;
};
