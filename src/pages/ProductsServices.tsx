import { useNavigate } from "@tanstack/react-location";
import { useContext, useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import AppLayout from "../layout/AppLayout";
import { ProductType } from "../types";
import FNBCardGold from "../img/etc/fnb-card-gold.png";
import FNBCardSilver from "../img/etc/fnb-card-silver.png";
import FNBCardBlack from "../img/etc/fnb-card-black.png";
import FNBCardPrivate from "../img/etc/fnb-card-private.png";
import BackButton from "../components/BackButton";
import Avatar from "../components/Avatar";
import Text from "../components/Text";
import Context from "../context";

const reqResults = [
  {
    product: "FNB",
    name: "Gold Lifestyle Account",
    income: "N$ 300 000 - N$ 400 000",
    status: "new",
    id: "fnb-gold",
    image: FNBCardGold,
    to: "/gold-lifestyle-account",
  },
  {
    product: "FNB",
    name: "Platinum Lifestyle Account",
    income: "N$ 300 000 - N$ 400 000",
    status: "new",
    id: "fnb-platinum",
    image: FNBCardSilver,
    to: "/platimum-lifestyle-account",
  },
  {
    product: "FNB",
    name: "Private Clients Lifestyle",
    income: "N$ 300 000 - N$ 400 000",
    status: "new",
    id: "fnb-private-client",
    image: FNBCardBlack,
    to: "/private-clients-lifestyle",
  },
  {
    product: "FNB",
    name: "Private Wealth Lifestyle",
    income: "N$ 300 000 - N$ 400 000",
    status: "",
    id: "fnb-private-wealth",
    image: FNBCardPrivate,
    to: "/private-wealth-lifestyle",
  },
];

function ProductsServices() {
  const [activeTab, updateActiveTab] = useState<string>("All");
  const [searchTerm, updateSearchTerm] = useState<string>("");
  const [list, updateList] = useState<ProductType[]>(reqResults);
  const { setProductService } = useContext(Context);
  const navigate = useNavigate();

  useMemo(() => {
    let result = reqResults.filter(
      ({ name }) => !name.toLowerCase().indexOf(searchTerm.toLowerCase())
    );

    if (activeTab !== "All") {
      result = result.filter(
        ({ status }) => status === activeTab.toLowerCase()
      );
    }

    updateList(result);
  }, [activeTab, searchTerm]);

  const clickHandler = (item: ProductType) => {
    setProductService(item);
    navigate({ to: `/products-services/${item.to}` });
  };

  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <BackButton to="/overview" />
        <Text.PageTitle>Products & Services</Text.PageTitle>
        <Avatar />
      </div>

      <div>
        <div className="py-4">
          <input
            type="text"
            placeholder="Search"
            className="input w-full text-sm font-light mb-3"
            onChange={(ev) => updateSearchTerm(ev.target.value)}
          />
          <div className="pb-4">
            <Button
              className={`${
                activeTab === "All" ? "btn-primary" : "btn-ghost text-base-300"
              } tab btn-sm px-6 mr-2`}
              onClick={() => updateActiveTab("All")}
            >
              All
            </Button>
            <Button
              className={`${
                activeTab === "New" ? "btn-primary" : "btn-ghost text-base-300"
              } tab btn-sm`}
              onClick={() => updateActiveTab("New")}
            >
              New
            </Button>
          </div>
        </div>
        <div>
          {list.length ? (
            list.map((item: ProductType) => (
              <div key={item.name} onClick={() => clickHandler(item)}>
                <Card className="mb-3">
                  <Card.Body className="py-3 px-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2/5 mr-3 relative">
                          <div className="w-full rounded-md overflow-hidden">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>

                        <div className="text-xs font-medium min-h-16 flex flex-col justify-between">
                          <div>{item.name}</div>
                          <div>
                            <div>Income per year</div>
                            <span>{item.income}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRightIcon className="w-4" />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="text-center text-sm text-gray-500">
              "No Results Found"
            </div>
          )}
        </div>
      </div>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default ProductsServices;
