import ClipboardIcon from "../icons/ClipboardIcon";
import HomeIcon from "../icons/HomeIcon";
import PlusIcon from "../icons/PlusIcon";
import Button from "./Button";

function BottomNav() {
  return (
    <div className="bg-slate-900 h-20 py-4 flex justify-between fixed bottom-0 left-0 w-full">
      <Button className="">
        <HomeIcon />
      </Button>

      <Button>
        <PlusIcon />
      </Button>

      <Button>
        <ClipboardIcon />
      </Button>
    </div>
  );
}

export default BottomNav;
