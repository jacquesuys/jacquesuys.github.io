import { type } from "os";
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

export type UserType = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type LinkType = {
  children: ReactNode;
  className?: string;
  to: string;
};

export type TabType = {
  children: ReactNode;
  className?: string;
  to?: string;
  alert?: boolean;
};
