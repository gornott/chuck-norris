import { IsFibonacciPipe } from './is-fibonacci-pipe';

describe('IsFibonacciPipe', () => {
  it('create an instance', () => {
    const pipe = new IsFibonacciPipe();
    expect(pipe).toBeTruthy();
  });
});
