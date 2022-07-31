// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ja.md
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwaited<P>
    : P
  : unknown;
