// https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md
type StartsWith<T extends string, U extends string> = T extends `${U}${infer _P}`
  ? true
  : false;
