import { Property } from "csstype";

export type tableValue<T> = {
  readonly headers: header[];
  readonly footers: footer[] | null;
  readonly values?: T[];
};
export type header = {
  readonly name: string;
  readonly width: string;
  readonly isSum: boolean;
  readonly position: Property.TextAlign;
};
export type footer = {
  readonly colSpan: number;
  readonly name?: string;
  readonly isSum: boolean;
  readonly position?: Property.TextAlign;
};
export type data = {
  readonly code: string;
  readonly name: string;
  readonly stock: string;
  readonly amount: string;
  readonly sumAmount: string;
  readonly dividend: string;
  readonly sumDividend: string;
  readonly date: string;
  readonly benefits: string;
};
