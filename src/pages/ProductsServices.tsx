import { Link } from "@tanstack/react-location";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import AppLayout from "../layout/AppLayout";
import { CompanyType } from "../types";
import Bipa from "../img/etc/bipa-bg.png";
import Momentum from "../img/etc/momentum.jpg";
import Hollard from "../img/etc/hollard.jpg";
import Nedbank from "../img/etc/nedbank.png";
import BackButton from "../components/BackButton";
import Avatar from "../components/Avatar";
import Text from "../components/Text";

const reqResults = [
  {
    name: "BIPA",
    status: "new",
    id: "bipa",
    image: Bipa,
    to: "/bipa",
  },
  {
    name: "Momentum",
    status: "new",
    id: "momentum",
    image: Momentum,
    to: "/momentum",
  },
  {
    name: "Hollard",
    status: "new",
    id: "hollard",
    image: Hollard,
    to: "/hollard",
  },
  {
    name: "Nedbank",
    status: "",
    id: "nedbank",
    image: Nedbank,
    to: "/nedbank",
  },
];

function ProductsServices() {
  const [activeTab, updateActiveTab] = useState<string>("All");
  const [searchTerm, updateSearchTerm] = useState<string>("");
  const [list, updateList] = useState<CompanyType[]>(reqResults);

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
                activeTab === "All" ? "btn-primary" : "btn-ghost text-base-100"
              } tab btn-sm px-6 mr-2`}
              onClick={() => updateActiveTab("All")}
            >
              All
            </Button>
            <Button
              className={`${
                activeTab === "New" ? "btn-primary" : "btn-ghost text-base-100"
              } tab btn-sm`}
              onClick={() => updateActiveTab("New")}
            >
              New
            </Button>
          </div>
        </div>
        <div>
          {list.length ? (
            list.map((item: CompanyType) => (
              <Link to={`${item.id}`} key={item.name}>
                <Card className="mb-3">
                  <Card.Body className="py-3 px-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="avatar">
                          <div className="w-9 mr-3 rounded-full">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <div className=" font-medium">{item.name}</div>
                      </div>
                      <ChevronRightIcon className="w-4" />
                    </div>
                  </Card.Body>
                </Card>
              </Link>
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
