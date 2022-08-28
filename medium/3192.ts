// https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md
type Reverse<T extends unknown[]> = T extends [infer L, ...infer R]
  ? [...Reverse<R>, L]
  : [];
