// https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md
type Shift<T extends unknown[]> = T extends [infer _First, ...infer Rest]
  ? Rest
  : [];
