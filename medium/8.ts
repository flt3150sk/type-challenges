// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.ja.md
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & {
  [key in Exclude<keyof T, K>]: T[key];
};
