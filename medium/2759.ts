// https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md
type Merge<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, K = keyof T> = Merge<
  {
    [P in keyof T as P extends K ? P : never]-?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;
