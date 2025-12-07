import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFibonacci',
  standalone: true
})
export class IsFibonacciPipe implements PipeTransform {
  //https://www.geeksforgeeks.org/dsa/check-number-fibonacci-number/
  transform(index: number): boolean {
    // A number is Fibonacci if one of these conditions is true
   return this.isPerfectSquare(5 * index * index + 4) || this.isPerfectSquare(5 * index * index - 4);
  }
  //A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square
  isPerfectSquare(x: number): boolean {
    const s = Math.floor(Math.sqrt(x));
    return s * s === x;
  }

}
