// https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
type IsNever<T> = [T] extends [never] ? true : false;
