export const MATERIAL = {
  PLASTIC: "Plastic",
  MAGNESIUM: "Magnesium",
} as const;

type ObjectValues<T> = T[keyof T];

export type Material = ObjectValues<typeof MATERIAL>;
