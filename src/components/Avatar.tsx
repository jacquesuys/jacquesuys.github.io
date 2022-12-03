import profile from "../img/profile.jpeg";

function Avatar() {
  return (
    <div className="avatar">
      <div className="w-10 rounded-full">
        <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default Avatar;
