// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ja.md
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};
