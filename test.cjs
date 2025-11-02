const timeModule = require('./my-module.cjs');

// Example 1 
// const ranges = [
//   [1000, 2000],
//   [2500, 4000],
//   [3900, 4100],
//   [8000, 9000],
//   [9050, 9500]
// ];
// const threshold = 200;


// Example 2
// const ranges = [
//   [0, 10],
//   [15, 20],
//   [25, 30]
// ];
// const threshold = 4;


// Example 3
const ranges = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold = 4;

console.log(timeModule.mergeTimeRanges(ranges, threshold));
