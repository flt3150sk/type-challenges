// https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
