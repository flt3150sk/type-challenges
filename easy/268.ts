// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ja.md
type If<C extends boolean, T, F> = C extends true ? T : F;
