// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.ja.md
type Unshift<T extends unknown[], U> = [U, ...T];
