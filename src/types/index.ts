export type TtableColumn = Array<{
  title: { name: string; additional?: string };
  width: string;
  type: 'string' | 'compound' | 'date';
  d_name: string;
  isSort: boolean;
}>;
