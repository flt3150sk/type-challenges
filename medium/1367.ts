// https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md
type RemoveIndexSignature<T> = {
  [k in keyof T as string extends k
    ? never
    : number extends k
    ? never
    : symbol extends k
    ? never
    : k]: T[k];
};
