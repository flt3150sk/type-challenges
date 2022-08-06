// https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.ja.md
type MyCapitalize<S extends string> = S extends `${infer P}${infer R}`
  ? `${Uppercase<P>}${R}`
  : S;
