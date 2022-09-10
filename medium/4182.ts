// https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.md
type Fibonacci<
  T extends number,
  N extends Number[] = [1],
  R extends number[] = [1],
  C extends number[] = [1]
> = N["length"] extends T
  ? R["length"]
  : Fibonacci<T, [...N, 1], C, [...R, ...C]>;
