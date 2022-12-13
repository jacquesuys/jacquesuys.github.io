import { Link, useMatchRoute } from "@tanstack/react-location";
import { LinkType } from "../types";

function LinkButton({ to, children, className }: LinkType) {
  const matchRoute = useMatchRoute();
  const active = matchRoute({ to });

  return (
    <Link
      to={to}
      className={`transition duration-200 ease-out btn-primary btn capitalize text-white btn-sm flex w-full justify-start items-center px-3 rounded-none btn-ghost mb-2 ${className} ${
        to === "/overview" ? "text-white" : "text-gray-300"
      } ${active ? "bg-base-100" : "bg-black"}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
