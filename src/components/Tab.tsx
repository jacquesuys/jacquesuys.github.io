import { Link, useMatchRoute } from "@tanstack/react-location";
import { TabType } from "../types";

function Tab({ to, children, className, alert }: TabType) {
  const matchRoute = useMatchRoute();
  const active = matchRoute({ to });

  return (
    <Link
      to={to}
      className={`tab rounded-full btn-sm px-6 leading-3 relative ${
        active ? "bg-primary text-white" : "text-base-300"
      } ${className}`}
    >
      {children}
      {alert && (
        <span className="bg-error w-2 h-2 rounded-full absolute right-2"></span>
      )}
    </Link>
  );
}

export default Tab;
