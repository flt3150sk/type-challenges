// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.ja.md
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
