export const TAGS = [
  "food",
  "travel",
  "editorial",
  "book covers",
  "spots",
  "publishing",
] as const;

export type Tag = (typeof TAGS)[number];
