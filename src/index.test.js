const benchmarker = require('./index');

describe('test function-benchmarker', () => {
  it('run default times (1000000)', () => {
    const mockFn = jest.fn();
    const costTime = benchmarker(mockFn);

    expect(mockFn).toHaveBeenCalledTimes(1000000);
    expect(costTime).toEqual(expect.any(Number));
  });

  it('run with 1000 times', () => {
    const mockFn = jest.fn();
    const costTime = benchmarker(mockFn, 1000);

    expect(mockFn).toHaveBeenCalledTimes(1000);
    expect(costTime).toEqual(expect.any(Number));
  });

  it('throw error when not provide a function', () => {
    const mockFn = 'THIS_IS_NOT_A_FUNCTION';
    expect(() => benchmarker(mockFn)).toThrow();
  })

});