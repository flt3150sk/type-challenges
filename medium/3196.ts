// https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md
type FlipArguments<T> = T extends (...args: [...infer A]) => infer R
  ? (...args: Reverse<A>) => R
  : never;

type a = FlipArguments<() => boolean>;
type b = FlipArguments<(foo: string) => number>;
type c = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>;
