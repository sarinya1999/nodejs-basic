class Calulator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const CalulatorObject = new Calulator();
// console.calmultiply = new Calulator();
console.log(Calulator.sum(1, 2));
console.log(CalulatorObject.multiply(2, 3));
