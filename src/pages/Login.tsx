import { Link } from "@tanstack/react-location";
import Button from "../components/Button";
import logo from "../img/logo.png";
import login from "../img/login.png";

function Login() {
  return (
    <div className="flex flex-col h-full justify-between items-center">
      <div>
        <img src={login} alt="IDToday Login" className="w-full" />
        <h1 className="text-3xl font-bold leading-10 my-7">
          The only identity platform you'll <br /> ever need
        </h1>
      </div>

      <div className="flex flex-col w-full items-center">
        <Link to="/overview" className="w-full pb-5">
          <Button className="w-full bg-primary">Sign in with Email</Button>
        </Link>
        <div className="grid grid-cols-2 gap-3 w-full">
          <Button className="w-full btn-outline btn-tertiary">Google</Button>
          <Button className="w-full btn-outline btn-tertiary">Apple ID</Button>
        </div>
      </div>
      <div className="flex flex-col items-center py-3">
        <small className="text-xs text-gray-400 py-1">
          By Continuining you agree to the Terms and Condintions
        </small>
        <img src={logo} alt="IDToday" className="w-40" />
      </div>
    </div>
  );
}

export default Login;
