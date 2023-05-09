function analyzeArray(array) {
  let object = {
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
}

function getAverage(array) {
  let length = array.length;
  let total = 0;
  for (let i = 0; i < length; i++) {
    total += array[i];
  }

  return total / length;
}

export { analyzeArray };
