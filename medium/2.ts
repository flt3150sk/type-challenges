// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ja.md
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : never;
