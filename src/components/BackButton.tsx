import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import LinkButton from "./LinkButton";

function BackButton({ to }: { to: string }) {
  return (
    <LinkButton to={to} className="rounded-xl btn-md px-0 w-12">
      <ChevronLeftIcon className="w-4" />
    </LinkButton>
  );
}

export default BackButton;
