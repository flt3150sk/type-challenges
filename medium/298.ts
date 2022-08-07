// https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.ja.md
type StringToArray<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : [];
type LengthOfString<S extends string> = StringToArray<S>["length"];
