export const TAGS = ["food", "conceptual", "publishing"] as const;

export type Tag = (typeof TAGS)[number];

// Display label shown in the UI for each tag. Falls back to the tag itself
// (capitalized) if not listed here. Keep tag keys (and thus URLs/project
// data) stable even if you want to change how a tag reads on the page.
export const TAG_LABELS: Partial<Record<Tag, string>> = {
  food: "Food + Drink",
};

export function tagLabel(tag: Tag): string {
  return TAG_LABELS[tag] ?? tag;
}
