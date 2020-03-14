export type NoteItem = {
  id: string;
  title?: string;
  previewText?: string;
  date?: string;
};
export type Notes = NoteItem[];

export type Note = {
  id: string;
  title?: string;
  body?: string;
  labels?: string[];
};
export type SvgProps = {
  height: number;
  width: number;
  viewBox?: string;
};
