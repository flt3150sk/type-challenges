// https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.md
type String2Union<S extends string> = S extends `${infer C}${infer R}`
  ? C | String2Union<R>
  : never;

type AllCombinations<S extends string, U extends string = String2Union<S>> = [
  U
] extends [never]
  ? ""
  : "" | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];
