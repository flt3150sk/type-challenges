// https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.md
type ReplaceKeys<U, T, Y> = {
  [key in keyof U]: key extends T
    ? key extends keyof Y
      ? Y[key]
      : never
    : U[key];
};
