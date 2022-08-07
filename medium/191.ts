// https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.ja.md
type AppendArgument<Fn, A> = Fn extends (...args: infer T) => infer R
  ? (...args: [...T, A]) => R
  : never;
