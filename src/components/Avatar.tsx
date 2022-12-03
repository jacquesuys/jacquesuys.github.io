import { Link } from "@tanstack/react-router";
import profile from "../img/profile.jpeg";

function Avatar() {
  return (
    <Link to="/profile" className="avatar">
      <div className="w-10 rounded-full">
        <img src={profile} alt="" />
      </div>
    </Link>
  );
}

export default Avatar;
