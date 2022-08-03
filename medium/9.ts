// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.ja.md
type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never
    ? T[key]
    : DeepReadonly<T[key]>;
};
