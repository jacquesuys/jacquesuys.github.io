import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ButtonType extends ComponentPropsWithoutRef<"button"> {}

export interface LayoutType extends ComponentPropsWithoutRef<"div"> {}

export type CardType = {
  children: ReactNode;
  className?: string;
};

export type CompanyType = {
  name: string;
  status: string;
  id: string;
  image?: string;
  to?: string;
};

export type HistoryType = {
  name: string;
  status: string;
  id: string;
  image?: string;
  to?: string;
  activity: string | Date;
};

export type VaultType = {
  name: string;
  status: string;
  icon: string;
  to: string;
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

export type RouteType = {
  path: string;
  element: ReactNode;
};
