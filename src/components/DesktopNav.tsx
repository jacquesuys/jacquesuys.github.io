import { Link, useMatchRoute } from "@tanstack/react-location";
import { Cog8ToothIcon as SettingsIcon } from "@heroicons/react/24/outline";
import {
  ArrowLeftOnRectangleIcon as LogoutIcon,
  HomeIcon,
  LockClosedIcon as LockIcon,
  ClipboardIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import login from "../img/logo.png";
import NavLink from "./NavLink";

function DesktopNav() {
  const matchRoute = useMatchRoute();
  const isLoginPage = matchRoute({ to: "/" });

  return (
    <div
      className={`hidden ${
        !isLoginPage && "lg:flex"
      } flex-col items-center justify-between w-1/4 xl:w-1/6 h-full min-h-screen`}
    >
      <div className="w-4/5 pt-2">
        <Link to="/">
          <img src={login} alt="IDToday Login" />
        </Link>
        <nav className="mt-16">
          <NavLink to="/overview">
            <HomeIcon className="w-4 mr-2" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/requests">
            <BellIcon className="w-4 mr-2" />
            Requests
          </NavLink>
          <NavLink to="/services">
            <ClipboardIcon className="w-4 mr-2" />
            Services
          </NavLink>
          <NavLink to="/my-vault">
            <LockIcon className="w-4 mr-2" />
            My Vault
          </NavLink>
        </nav>
      </div>

      <div className="w-4/5">
        <NavLink to="/settings">
          <SettingsIcon className="w-4 mr-2" />
          Settings
        </NavLink>
        <NavLink to="/">
          <LogoutIcon className="w-4 mr-2" />
          Log out
        </NavLink>
      </div>
    </div>
  );
}

export default DesktopNav;
