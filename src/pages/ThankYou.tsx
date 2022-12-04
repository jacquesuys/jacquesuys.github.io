import Avatar from "../components/Avatar";
import LinkButton from "../components/LinkButton";
import HomeIcon from "../icons/HomeIcon";
import AppLayout from "../layout/AppLayout";

function ThankYou() {
  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <LinkButton to="/overview" className="rounded-xl btn-md px-0 w-12">
          <HomeIcon className="w-4" />
        </LinkButton>
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

        <LinkButton to="/overview" className="w-full btn-md">
          Return to Home
        </LinkButton>
      </div>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default ThankYou;
