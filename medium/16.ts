// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md
type Pop<T extends unknown[]> = T extends [...infer L, infer R] ? L : never;
