import { Link } from "@tanstack/react-location";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import ChevronRightIcon from "../icons/CevronRightIcon";
import CheckCircleIcon from "../icons/CheckCircleIcon";
import AppLayout from "../layout/AppLayout";
import { CompanyType } from "../types";
import Bipa from "../img/etc/bipa-bg.png";
import Momentum from "../img/etc/momentum.jpg";
import Hollard from "../img/etc/hollard.jpg";
import Nedbank from "../img/etc/nedbank.png";

const reqResults = [
  {
    name: "BIPA Company Update",
    status: "pending",
    id: "bipa-company-update",
    image: Bipa,
  },
  {
    name: "Momentum Onboarding",
    status: "pending",
    id: "momentum-onboarding",
    image: Momentum,
  },
  {
    name: "Hollard Claim",
    status: "pending",
    id: "hollard-claim",
    image: Hollard,
  },
  { name: "Nedbank ODD", status: "", id: "nedbank-odd", image: Nedbank },
];

function Requests() {
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
      <AppLayout.TopBar />
      <AppLayout.Greeting />
      <Tabs />
      <div>
        <div className="flex items-center">
          <progress
            className="progress progress-primary w-full mr-2"
            value="25"
            max="100"
          ></progress>
          <span className="badge badge-ghost text-white">1/4</span>
        </div>
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
                activeTab === "Pending"
                  ? "btn-primary"
                  : "btn-ghost text-base-100"
              } tab btn-sm`}
              onClick={() => updateActiveTab("Pending")}
            >
              Pending
            </Button>
          </div>
        </div>
        <div>
          {list.length ? (
            list.map((item: CompanyType) => (
              <Link to="/company" key={item.name}>
                <Card
                  className={`mb-3 ${
                    item.status && `border-solid border border-red-600`
                  }`}
                >
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
                      {item.status === "pending" ? (
                        <ChevronRightIcon />
                      ) : (
                        <CheckCircleIcon className="fill-blue-500" />
                      )}
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

export default Requests;
