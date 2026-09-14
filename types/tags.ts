export const TAGS = ["food", "conceptual", "publishing"] as const;

export type Tag = (typeof TAGS)[number];
