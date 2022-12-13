import { Link } from "@tanstack/react-location";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";

function TopBar() {
  return (
    <div className="flex justify-between items-center py-3">
      <Link to="/overview" className="text-white font-semibold">
        Home
      </Link>
      <div className="flex items-center">
        <SearchIcon className="mr-2 w-4" />
        <Avatar />
      </div>
    </div>
  );
}

export default TopBar;
