import { Link } from "@tanstack/react-location";
import ClipboardIcon from "../icons/ClipboardIcon";
import HomeIcon from "../icons/HomeIcon";
import Button from "./Button";

function BottomNav() {
  return (
    <div
      className="h-20 py-4 flex justify-around fixed bottom-0 left-0 w-full"
      style={{ background: "#000000" }}
    >
      <Link to="/overview">
        <Button className="btn-ghost">
          <HomeIcon className="w-4" />
        </Button>
      </Link>

      <Button className="btn-primary btn px-4">
        <span className="font-regular text-2xl">+</span>
      </Button>

      <Button className="btn-ghost">
        <ClipboardIcon className="w-4" />
      </Button>
    </div>
  );
}

export default BottomNav;
