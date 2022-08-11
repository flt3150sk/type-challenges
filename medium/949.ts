// https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
type IsTrue<T> = T extends 0 | "" | false | [] | undefined
  ? false
  : T extends {}
  ? keyof T extends never
    ? false
    : true
  : true;

type AnyOf<T extends readonly unknown[]> = T extends [infer F, ...infer R]
  ? IsTrue<F> extends true
    ? true
    : AnyOf<R>
  : IsTrue<T[0]>;
