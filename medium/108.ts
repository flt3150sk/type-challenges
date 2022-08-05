// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.ja.md
type Space = " " | "\n" | "\t";

type LeftSpaceDelete<S extends string> = S extends `${Space}${infer R}`
  ? LeftSpaceDelete<R>
  : S;

  type RightSpace<S extends string> = S extends `${infer R}${Space}`
  ? RightSpace<R>
  : S;

  type Trim<S extends string> = RightSpace<LeftSpaceDelete<S>>;
