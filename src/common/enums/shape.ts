export const SHAPE = {
  AMBIDEXTROUS: "Ambidextrous",
  ERGONOMIC: "Ergonomic",
} as const;

type ObjectValues<T> = T[keyof T];

export type Shape = ObjectValues<typeof SHAPE>;
