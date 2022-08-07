// https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.ja.md
type Permutation<T, U = T> = [U] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];
