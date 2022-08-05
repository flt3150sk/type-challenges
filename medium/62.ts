// https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.ja.md
type LookUp<U, T> = U extends { type: T } ? U : never;
