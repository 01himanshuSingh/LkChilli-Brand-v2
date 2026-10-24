export interface AboutParagraphBlock {
  paragraphs: string[];
}

export interface CopyRun {
  text: string;
  emphasis?: boolean;
}

/** One visual line. A line may mix regular and bold runs. */
export type CopyLine = readonly CopyRun[];

export interface StatColumn {
  /** Single-line title used on mobile */
  title: string;
  /** Desktop-only line breaks (2 rows) */
  titleLines: readonly [string, string];
  body: string;
}

export interface AwardBadgeItem {
  id: string;
  label: string;
  year?: string;
}

export interface MonodoseColumn {
  id: string;
  title?: string;
  /** Mobile: natural wrapping paragraph */
  body: string;
  /** Desktop: explicit line breaks matching the reference */
  bodyLines: readonly string[];
}
