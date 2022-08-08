// https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.ja.md
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer P}`
  ? `${P}`
  : `${T}`;
