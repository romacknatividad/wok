declare module '@svar-ui/filter-store' {
  export type IFilterSet = {
    glue?: 'and' | 'or';
    rules?: Array<Record<string, unknown>>;
  };
  export type FilterOptions = Record<string, unknown>;
  export type IField = Record<string, unknown>;
  export type ArrayFilterFunction = (data: unknown[]) => unknown[];

  export function createArrayFilter(
    cfg: IFilterSet,
    opts?: FilterOptions,
    fields?: IField[]
  ): ArrayFilterFunction;
}

declare module '@svar-ui/react-filter' {
  import type { FC } from 'react';
  export { createArrayFilter } from '@svar-ui/filter-store';
  export const FilterBar: FC<{
    fields: Array<Record<string, unknown>>;
    value?: Record<string, unknown>;
    onChange?: (ev: { value: Record<string, unknown> }) => void;
    debounce?: number;
  }>;
}
