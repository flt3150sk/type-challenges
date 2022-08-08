// https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.ja.md
type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V;
};
