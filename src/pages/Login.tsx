import Button from "../components/Button";
import logo from "../img/logo.png";
import login from "../img/login.jpg";
import { Link } from "@tanstack/react-router";

function Login() {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <div>
        <img src={login} alt="IDToday Login" className="w-full" />
        <h1 className="text-3xl font-bold leading-10">
          The only identity platform you'll <br /> ever need
        </h1>
      </div>

      <div className="flex flex-col w-full items-center">
        <Link to="/overview" className="w-full pb-5">
          <Button className="w-full bg-blue-600">Sign in with Email</Button>
        </Link>
        <div className="flex w-full justify-between">
          <Button className="w-1/2">Google</Button>
          <Button className="w-1/2">Apple ID</Button>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6">
        <small className="text-xs">
          By Continuining you agree to the Terms and Condintions
        </small>
        <img src={logo} alt="IDToday" className="w-40" />
      </div>
    </div>
  );
}

export default Login;
