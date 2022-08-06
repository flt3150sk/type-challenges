// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.ja.md
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;
