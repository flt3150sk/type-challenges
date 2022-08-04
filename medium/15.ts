// https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ja.md
type Last<T extends unknown[]> = T extends [...infer P, infer R] ? R : never;
