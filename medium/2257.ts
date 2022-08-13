// https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md
type MinusOne<T extends number, C extends any[] = []> = [
  1,
  ...C
]["length"] extends T
  ? C["length"]
  : [1, 1, ...C]["length"] extends T
  ? [1, ...C]["length"]
  : MinusOne<T, [1, 1, ...C]>;
