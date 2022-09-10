// https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md
type Flip<T extends Record<any, any>> = {
  [key in keyof T as `${T[key]}`]: key;
};
