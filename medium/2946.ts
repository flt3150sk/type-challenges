// https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md
type ObjectEntries<T, U = keyof T> = U extends keyof T
  ? [U, T[U] extends infer Rest | undefined ? Rest : T[U]]
  : never;
