import { Link } from "@tanstack/react-location";
import Button from "./Button";

function Tabs() {
  return (
    <div className="tabs font-bold py-3">
      <Link to="/overview" className="tab px-0">
        <Button className="w-full bg-primary btn-sm px-6 leading-3">
          Overview
        </Button>
      </Link>

      <Link to="/requests" className="tab">
        <Button className="w-full btn-ghost btn-sm px-6 leading-3">
          Requests
        </Button>
      </Link>
    </div>
  );
}

export default Tabs;
