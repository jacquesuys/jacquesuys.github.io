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
