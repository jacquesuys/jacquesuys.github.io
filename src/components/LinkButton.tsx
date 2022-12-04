import { Link } from "@tanstack/react-location";
import { LinkType } from "../types";

function LinkButton({ to, children, className }: LinkType) {
  return (
    <Link
      to={to}
      className={`rounded-full btn-primary btn capitalize text-white btn-sm px-6 leading-3  ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
