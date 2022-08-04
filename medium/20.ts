// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.ja.md
type MyAwaited<T> = T extends Promise<infer P> ? P : T;
declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: MyAwaited<T[P]> }>;
