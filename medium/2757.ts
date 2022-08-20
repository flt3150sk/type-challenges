// https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md
type Copy<T> = {
  [P in keyof T]: T[P];
};

type PartialByKeys<T, K = keyof T> = Copy<
  Omit<T, K & keyof T> & Partial<Pick<T, K & keyof T>>
>;

interface User {
  name: string;
  age: number;
  address: string;
}

type A = PartialByKeys<User, "name">;
