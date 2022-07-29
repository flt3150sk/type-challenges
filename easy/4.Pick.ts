// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ja.md
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
