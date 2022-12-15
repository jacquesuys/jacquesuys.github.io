import Tile from "./Tile";
import { Link } from "@tanstack/react-location";
import Button from "./Button";
import iconLookup from "../utils/icon-lookup";

const categories = [
  {
    name: "Request",
    icon: "bell",
    color: "primary",
    indicator: 2,
    to: "/requests",
  },
  {
    name: "Products & Services",
    icon: "shopping",
    color: "warning",
    indicator: undefined,
    to: "/products-services",
  },
  {
    name: "Share History",
    icon: "share",
    color: "accent",
    indicator: undefined,
    to: "/share-history",
  },
  {
    name: "My Vault",
    icon: "lock",
    color: "secondary",
    indicator: undefined,
    to: "/my-vault",
  },
];

function Categories() {
  return (
    <div>
      <h2 className="text-xl font-bold py-3">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((item) => (
          <Link to={item.to} key={item.name}>
            <Tile indicator={item.indicator}>
              <Tile.TopRow>
                <Button
                  className={`btn btn-${
                    item.color || "primary"
                  } rounded-xl px-2 btn-sm py-0`}
                >
                  <div className="w-4">{iconLookup(item.icon)}</div>
                </Button>
              </Tile.TopRow>
              <Tile.Title>{item.name}</Tile.Title>
            </Tile>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
