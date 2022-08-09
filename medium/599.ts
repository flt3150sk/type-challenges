// https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.ja.md
type Merge<F, S> = {
  [key in keyof F | keyof S]: key extends keyof S
    ? S[key]
    : key extends keyof F
    ? F[key]
    : never;
};
