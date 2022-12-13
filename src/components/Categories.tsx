import Tile from "./Tile";
import { Link } from "@tanstack/react-location";
import Button from "./Button";
import {
  BellIcon,
  LockClosedIcon,
  ShareIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

function Categories() {
  return (
    <div>
      <h2 className="text-xl font-bold py-3">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/requests">
          <div className="indicator w-full">
            <span className="indicator-item badge badge-error mr-3"></span>
            <Tile>
              <Tile.TopRow>
                <Button className="btn btn-primary rounded-xl px-2 btn-sm py-0">
                  <BellIcon className="w-4" />
                </Button>
              </Tile.TopRow>
              <Tile.Title>Requests</Tile.Title>
            </Tile>
          </div>
        </Link>

        <Link to="/products-services">
          <div className="indicator w-full">
            <span className="indicator-item badge badge-error mr-3"></span>
            <Tile>
              <Tile.TopRow>
                <Button className="btn btn-warning rounded-xl px-2 btn-sm py-0">
                  <ShoppingBagIcon className="w-4" />
                </Button>
              </Tile.TopRow>
              <Tile.Title>Products &amp; Services</Tile.Title>
            </Tile>
          </div>
        </Link>

        <Link to="/share-history">
          <div className="indicator w-full">
            <span className="indicator-item badge badge-error mr-3"></span>
            <Tile>
              <Tile.TopRow>
                <Button className="btn btn-accent rounded-xl px-2 btn-sm py-0">
                  <ShareIcon className="w-4" />
                </Button>
              </Tile.TopRow>
              <Tile.Title>Share History</Tile.Title>
            </Tile>
          </div>
        </Link>

        <Link to="/my-vault">
          <div className="indicator w-full">
            <span className="indicator-item badge badge-error mr-3"></span>
            <Tile>
              <Tile.TopRow>
                <Button className="btn btn-secondary rounded-xl px-2 btn-sm py-0">
                  <LockClosedIcon className="w-4" />
                </Button>
              </Tile.TopRow>
              <Tile.Title>My Vault</Tile.Title>
            </Tile>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
