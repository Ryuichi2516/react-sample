import { Property } from "csstype";

export type TableValue<T> = {
  readonly headers: Header[];
  readonly footers: Footer[] | null;
  readonly values?: T[];
  readonly isDbclick?: boolean;
};
export type Header = {
  readonly name: string;
  readonly width: string;
  readonly isSum: boolean;
  readonly position: Property.TextAlign;
};
export type Footer = {
  readonly colSpan: number;
  readonly name?: string;
  readonly isSum: boolean;
  readonly position?: Property.TextAlign;
};
export type Data = {
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

export type LoginFormSignIn = {
  emailSignIn: string;
  passwordSignIn: string;
};

export type LoginFormSignUp = {
  usernameSignUp: string;
  emailSignUp: string;
  passwordSignUp: string;
};
