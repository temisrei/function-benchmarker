const benchmarker = (testFun, times = 1000000) => {
  if (typeof testFun !== 'function') {
    throw new Error('Did not provide a valid function for test.');
  }

  const startTime = new Date().getTime();

  let i = 0;
  while (i < times) {
    i++;
    testFun();
  }

  const endTime = new Date().getTime();

  return endTime - startTime;
};

module.exports = benchmarker;