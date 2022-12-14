import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "@tanstack/react-location";

function BackButton({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="rounded-xl bg-primary text-white w-9 h-9 flex items-center justify-center"
    >
      <ChevronLeftIcon className="w-3 stroke-white stroke-2" />
    </Link>
  );
}

export default BackButton;
