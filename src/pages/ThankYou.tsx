import { Link } from "@tanstack/react-router";
import React from "react";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import HomeIcon from "../icons/HomeIcon";
import AppLayout from "../layout/AppLayout";

function ThankYou() {
  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <Link to="/overview">
          <Button className="bg-primary rounded-xl px-4 py-0 btn-md">
            <HomeIcon className="w-4" />
          </Button>
        </Link>
        <div className="font-semibold text-base text-white">BIPA Update</div>
        <Avatar />
      </div>
      <div
        className="flex flex-col justify-between"
        style={{ height: `calc(100vh - 200px)` }}
      >
        <div>
          <h2 className="font-bold text-2xl text-center my-7">
            Thank you, Tuna Brock.
          </h2>
          <h4 className="text-base leading-6 mb-2">
            All your information and documents have been securely sent to the
            accounts team at BIPA.
          </h4>
          <p className="text-xs leading-5">
            We have also saved all the information and documents (updated
            existing and additional) in your Vault, so you can easily re-share
            again in the future.
          </p>
        </div>

        <Link to="/overview">
          <Button className="w-full bg-primary">Return to Home</Button>
        </Link>
      </div>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default ThankYou;
