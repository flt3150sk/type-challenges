// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.ja.md
type Length<T extends readonly unknown[]> = T["length"];
