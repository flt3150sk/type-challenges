// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ja.md
type TupleToUnion<T> = T extends [infer A, ...infer B]
  ? A | TupleToUnion<B>
  : never;
