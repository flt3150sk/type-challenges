// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.ja.md
type MyOmit<T, K extends keyof T> = {
  [key in Exclude<keyof T, K>]: T[key];
};
