// https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md
type KebabCase<S> = S extends `${infer L}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<L>}${KebabCase<R>}`
    : `${Uncapitalize<L>}-${KebabCase<R>}`
  : S;
