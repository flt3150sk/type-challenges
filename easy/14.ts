// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ja.md
type First<T extends any[]> = T extends [infer T, ...infer P] ? T : never;
