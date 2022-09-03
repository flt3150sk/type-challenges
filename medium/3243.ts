type FlattenDepth<
  T extends readonly unknown[],
  Depth extends number = 1,
  CurrentDepthTuple extends readonly unknown[] = []
> = Depth extends CurrentDepthTuple["length"]
  ? T
  : T extends [infer R, ...infer U]
  ? R extends readonly unknown[]
    ? [
        ...FlattenDepth<R, Depth, [0, ...CurrentDepthTuple]>,
        ...FlattenDepth<U, Depth, [...CurrentDepthTuple]>
      ]
    : [R, ...FlattenDepth<U, Depth, [...CurrentDepthTuple]>]
  : [];
