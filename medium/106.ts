// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.ja.md
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer P}`
  ? TrimLeft<P>
  : S;
