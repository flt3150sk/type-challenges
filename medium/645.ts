// https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md
type Diff<O, O1> = {
  [key in Exclude<keyof (O & O1), keyof (O | O1)>]: (O & O1)[key];
};
