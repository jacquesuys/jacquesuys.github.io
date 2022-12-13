import { Link } from "@tanstack/react-location";
import AppLayout from "../layout/AppLayout";
import profile from "../img/profile.jpeg";
import Button from "../components/Button";
import Card from "../components/Card";
import {
  ChevronRightIcon,
  LockClosedIcon as LockIcon,
} from "@heroicons/react/24/solid";

function Profile() {
  return (
    <AppLayout>
      <div className="flex flex-col justify-center items-center">
        <div className="avatar flex justify-center mb-5">
          <div className="w-1/3 rounded-full">
            <img src={profile} alt="Tuna Brock" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center">Tuna Brock</h2>
        <span className="underline text-xs text-gray-400 mb-3">
          tunabrock@gmail.com
        </span>
        <Button className="btn-primary btn btn-sm px-6 mb-5">
          Edit Profile
        </Button>
        <div className="w-full text-sm text-gray-600 mb-1">My Vault</div>

        <Link to="/my-vault" className="w-full mb-4">
          <Card>
            <Card.Body className="p-4">
              <div className="flex justify-between items-center">
                <div className="font-medium flex justify-center items-center">
                  <button className="btn-secondary btn btn-sm mr-2">
                    <div className="w-4">
                      <LockIcon className="fill-white" />
                    </div>
                  </button>
                  <span>My Vault</span>
                </div>
                <div className="w-4">
                  <ChevronRightIcon />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Link>

        <div className="w-full text-sm text-gray-600 mb-1">Notifications</div>
        <Card className="mb-4">
          <Card.Body className="p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Turn on Notifications</span>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="toggle toggle-primary toggle-sm"
                />
              </label>
            </div>
          </Card.Body>
        </Card>

        <div className="w-full text-sm text-gray-600 mb-1">Invite Link</div>
        <Card>
          <Card.Body className="p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Invite people</span>
              <Button className="btn-primary btn btn-sm px-6">Invite</Button>
            </div>
          </Card.Body>
        </Card>
        <Link to="/" className="text-sm text-gray-600 mt-10">
          Log out
        </Link>
      </div>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default Profile;
