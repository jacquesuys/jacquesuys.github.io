import BellIcon from "../icons/BellIcon";
import Button from "./Button";
import Card from "./Card";
import Bipa from "../img/etc/bipa-bg.png";
import Nedbank from "../img/etc/nedbank.png";

function Tile() {
  return (
    <Card>
      <Card.Body className="p-3">
        <div className="flex justify-between">
          <Button className="btn btn-primary rounded-xl px-2 btn-sm py-0">
            <BellIcon className="w-4" />
          </Button>
          <div className="flex items-center flex-row-reverse">
            <div className="avatar -ml-2">
              <div className="w-5 rounded-full">
                <img src={Nedbank} alt="Nedbank" />
              </div>
            </div>

            <div className="avatar">
              <div className="w-5 rounded-full">
                <img src={Bipa} alt="Bipa" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="font-regular text-xs text-gray-400">3 New</span>
          <h3 className="font-bold text-base">Requests</h3>
        </div>

        <div className="flex items-center">
          <progress
            className="progress progress-primary w-3/4 mr-2"
            value="25"
            max="100"
          ></progress>
          <span className="badge badge-primary text-white">1/4</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Tile;
