// https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.ja.md
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>;
  get: () => T;
};
