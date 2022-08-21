// https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
type OmitByType<T, U> = {
  [key in keyof T as T[key] extends U ? never : key]: T[key];
};

