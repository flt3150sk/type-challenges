// https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md
type EndsWith<T extends string, U extends string> = T extends `${infer P}${U}`
  ? true
  : false;
