// https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md
type IsUnion<T, U = T> = [T] extends [never]
  ? false
  : T extends U
  ? [U] extends [T]
    ? false
    : true
  : false;
