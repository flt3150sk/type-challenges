// https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md
type PickByType<T, U> = {
  [key in keyof T as T[key] extends U ? key : never]: T[key];
};
