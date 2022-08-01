// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.ja.md
type MyParameters<T extends (...args: any[]) => void> = T extends (
  ...args: infer P
) => void
  ? P
  : never;
