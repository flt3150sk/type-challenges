// https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.md
type DropChar<
  S extends string,
  C extends string
> = S extends `${infer L}${infer R}`
  ? L extends C
    ? DropChar<R, C>
    : `${L}${DropChar<R, C>}`
  : "";

type A = DropChar<"butter fly!", " ">;
