// https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md
type TupleToNestedObject<T, U> = T extends [infer L, ...infer Rest]
  ? {
      [Key in L as Key extends PropertyKey ? Key : never]: TupleToNestedObject<
        Rest,
        U
      >;
    }
  : U;
