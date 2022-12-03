import { ReactNode } from "react";

export type ButtonType = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export type CardType = {
  children: ReactNode;
  className?: string;
};

export type LayoutType = {
  children: ReactNode;
};

export type CompanyType = {
  name: string;
  status: string;
  id: string;
  image?: string;
};

export type SVGType = {
  className?: string;
};

export type InputType = {
  placeholder?: string;
  type?: string;
};
