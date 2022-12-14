import { Link } from "@tanstack/react-location";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import AppLayout from "../layout/AppLayout";
import { VaultType } from "../types";
import BackButton from "../components/BackButton";
import Avatar from "../components/Avatar";
import Text from "../components/Text";
import iconLookup from "../utils/icon-lookup";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const reqResults = [
  {
    name: "My Info",
    icon: "info",
    status: "recent",
    to: "/my-info",
  },
  {
    name: "My Documents",
    icon: "document",
    status: "recent",
    to: "/my-documents",
  },
];

function MyVault() {
  const [activeTab, updateActiveTab] = useState<string>("All");
  const [searchTerm, updateSearchTerm] = useState<string>("");
  const [list, updateList] = useState<VaultType[]>(reqResults);

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
        <Text.PageTitle>My Vault</Text.PageTitle>
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
                activeTab === "Recent"
                  ? "btn-primary"
                  : "btn-ghost text-base-300"
              } tab btn-sm`}
              onClick={() => updateActiveTab("Recent")}
            >
              Recent
            </Button>
          </div>
        </div>
        <div>
          {list.length ? (
            list.map((item: VaultType) => (
              <Link to={`/my-vault/${item.to}`} key={item.name}>
                <Card className={`mb-3 `}>
                  <Card.Body className="py-3 px-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="avatar">
                          <button className="btn btn-secondary btn-sm mr-2 text-white px-2 text-center">
                            <div className="w-4 ">{iconLookup(item.icon)}</div>
                          </button>
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

export default MyVault;
