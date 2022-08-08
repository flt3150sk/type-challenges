// https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.ja.md
type Flatten<T extends unknown[]> = T extends [infer L, ...infer R]
  ? L extends unknown[]
    ? [...Flatten<L>, ...Flatten<R>]
    : [L, ...Flatten<R>]
  : [];
