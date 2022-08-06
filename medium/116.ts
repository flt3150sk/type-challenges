//　https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.ja.md
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;
