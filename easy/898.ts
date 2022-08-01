// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ja.md
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T1>() => T1 extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly unknown[], U> = T extends [infer P, ...infer R]
  ? Equal<P, U> extends true
    ? true
    : Includes<R, U>
  : false;
