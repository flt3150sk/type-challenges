// https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.ja.md
type StringToUnion<T extends string> = T extends `${infer L}${infer R}`
  ? L | StringToUnion<R>
  : never;
