export interface PageResponse<T> {
  totalEntries: number;
  content: T[];
}

export function emptyPage<T>(): PageResponse<T> {
  return { totalEntries: 0, content: [] }
}
