import Avatar from "../components/Avatar";
import LinkButton from "../components/LinkButton";
import { HomeIcon } from "@heroicons/react/24/solid";
import AppLayout from "../layout/AppLayout";
import { Link } from "@tanstack/react-location";

const historyList = [
  {
    title: "Information",
    list: [
      "Full Name",
      "Passport",
      "Date of Birth",
      "Residential Address",
      "Cellphone Number",
    ],
  },
  {
    title: "Additional Information",
    list: ["Company Name", "Company Type"],
  },
  {
    title: "Documents",
    list: ["ID/Passport", "CC1/CC1", "Tax Certificate"],
  },
];

function ShareHistorySubPage() {
  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <LinkButton to="/overview" className="rounded-xl btn-md px-0 w-12">
          <HomeIcon className="w-4" />
        </LinkButton>
        <div className="font-semibold text-base text-white">Share History</div>
        <Avatar />
      </div>
      <div
        className="flex flex-col justify-between"
        style={{ height: `calc(100vh - 200px)` }}
      >
        <div>
          <h4 className="text-base leading-6 mb-2">
            This is all information that was securley shared to BIPA with your
            authorisation for BIPA Company Update @ 11:10 AM - 05/12/2022
          </h4>
          <p className="text-sm leading-5">
            If you wish to unlink your information from the above business click
            the unlink button at the bottom of the page.
          </p>
          <div className="py-4">
            {historyList.map(({ title, list }) => (
              <div key={title}>
                <h5 className="text-xl font-semibold py-2">{title}</h5>
                <ul className="list-inside list-disc text-lg">
                  {list.map((item) => (
                    <li key={`${title}-${item}`} className="py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/share-history"
          className="text-sm text-gray-600 mt-10 w-full text-center"
        >
          Unlink
        </Link>
      </div>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default ShareHistorySubPage;
