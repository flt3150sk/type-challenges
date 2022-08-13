// https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md
type PercentageParser<A extends string> =
  A extends `${infer R extends '+' | '-'}${infer U}%`
    ? [R, U, '%']
    : A extends `${infer R extends '+' | '-'}${infer U}`
      ? [R, U, '']
      : A extends `${infer U}%`
        ? ['', U, '%']
        : A extends `${infer U}`
          ? ['', U, '']
          : never